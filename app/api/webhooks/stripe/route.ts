import { env } from "@/env";
import { prisma } from "@/lib/db/prisma";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import nodemailer from "nodemailer";
import { formatDate } from "date-fns";

export async function POST(req: NextRequest) {
  const chunks = [];

  //@ts-expect-error error
  for await (const chunk of req.body) {
    chunks.push(typeof chunk === "string" ? Buffer.from(chunk) : chunk);
  }

  const buffer = Buffer.concat(chunks);

  const rawBody = buffer.toString("utf-8");

  let event;

  try {
    const sig = req.headers.get("stripe-signature");

    event = Stripe.webhooks.constructEvent(
      rawBody,
      sig as string | string[],
      env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error: any) {
    console.error("Error processing stripe webhook.", error);
    return new NextResponse(`Webhook error: ${error.message}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed" && event.data.object.metadata?.userId) {

    try {
      const userId = event.data.object.metadata?.userId;
      const bookingId = event.data.object.metadata?.bookingId;
      const email = event.data.object.metadata?.email;
      const amount = event.data.object.metadata?.amount;

      const booking = await prisma.booking.findFirst({
        where: {
          id: bookingId,
          userId
        },
        include: {
          room: true
        },
      });

      if (booking) {
        await prisma.booking.update({
          where: {
            id: bookingId
          },
          data: {
            status: "Confirmed"
          }
        });

        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: env.EMAIL_USER,
            pass: env.EMAIL_PASSWORD
          },
          tls: {
            rejectUnauthorized: false,
          },
        });

        const mailOptions = {
          from: `<${env.EMAIL_USER}>`,
          to: `${email}`,
          subject: `Your Aurevo booking has been confirmed`,
          replyTo: `${env.EMAIL_USER}`,
          html: `
  <div style="font-family: Arial, sans-serif; background-color: #f5f8fa; padding: 30px; text-align: center;">
    <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">
      
      <!-- Header -->
      <div style="background-color: #2D2E83; color: white; padding: 24px; text-align: left;">
        <h2 style="margin: 0; font-size: 22px; font-weight: 600;">Aurevo Reservation Confirmed 🎉</h2>
      </div>

      <!-- Host Message -->
      <div style="padding: 20px; text-align: left; border-bottom: 1px solid #eee;">
        <p style="font-size: 15px; margin: 0 0 8px;"><strong>Welcome to Aurevo!</strong></p>
        <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #444;">
          Thank you for choosing Aurevo. Your stay is confirmed and we look forward to hosting you. 
          Please reach out if you need assistance with your arrival. 
          Location: ${booking.room?.address}
        </p>
      </div>

      <!-- Property Image -->
      <div>
        <img src="${booking.room?.images[0] || 'https://aurevo-default-image.com/room.jpg'}" alt="Property Image" style="width: 100%; max-height: 250px; object-fit: cover;">
      </div>

      <!-- Booking Details -->
      <div style="padding: 20px; text-align: left;">
        <h3 style="margin-top: 0; font-size: 18px; color: #2D2E83;">${booking.room?.name || 'Your Aurevo Stay'}</h3>
        <p style="margin: 0; font-size: 14px; color: #666;">${booking.room?.description || 'A comfortable stay awaits you with Aurevo.'}</p>

        <table style="width: 100%; margin-top: 15px; border-collapse: collapse; font-size: 14px; color: #333;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Check-in</strong><br>${formatDate(booking.checkIn, "EEEE LLLL YYYY")}</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Check-out</strong><br>${formatDate(booking.checkOut, "EEEE LLLL YYYY")}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Guests</strong><br>${booking.guests}</td>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Total Paid</strong><br>$${amount}</td>
          </tr>
        </table>
      </div>

      <!-- Footer -->
      <div style="padding: 20px; background: #f0f2f7; text-align: center; font-size: 12px; color: #666;">
        <p style="margin: 0; font-size: 13px;">Thank you for booking with <strong style="color:#2D2E83;">Aurevo</strong>.</p>
        <p style="margin: 12px 0; font-size: 14px; color: #444; text-align: center;">
           Manage your stay anytime with the <strong style="color:#2D2E83;">Aurevo</strong> app:
        </p>
        <p style="text-align: center; margin: 16px 0;">
        <a href="https://aurevo.com/app" 
         style="display: inline-block; background-color: #2D2E83; color: #ffffff; 
                text-decoration: none; font-weight: 600; font-size: 14px; 
                padding: 10px 22px; border-radius: 6px; box-shadow: 0 2px 6px rgba(0,0,0,0.15);">
              Open Aurevo App
             </a>
        </p>
      </div>
    </div>
  </div>
  `
        };

        //                 <p>
        //   <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style="height:40px; margin-right:5px;"></a>
        //   <a href="#"><img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" style="height:40px;"></a>
        // </p>


        await transporter.sendMail(mailOptions);

      }
      return new NextResponse("Registration created", { status: 200 })
    } catch (error) {
      console.error(error);
      return new NextResponse("Error registering for event.", { status: 500 });
    }
  }
}