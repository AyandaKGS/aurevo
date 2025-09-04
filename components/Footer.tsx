import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {Separator} from "@/components/ui/separator";

export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Separator className="my-5 bg-gray-800 w-11/12 mx-auto" />
          <div className="flex flex-row justify-between gap-8">
            <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400">&copy; {new Date().getFullYear()} Aurevo. All rights reserved.</p>
          </div>
            <div>
              <Image
                src="/images/logo-3-transparent.png"
                alt="logo"
                width={100}
                height={100}
                className="object-cover w-32 invert"
              />
              <p className="text-gray-400 mb-4">Elevating luxury living, around the world.</p>
              <div className="flex space-x-2">
                {[...Array(3)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
                <span className="text-sm text-gray-400 ml-2">3-Star+ Apartments</span>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/rooms" className="hover:text-white">
                    Rooms
                  </Link>
                </li>
                <li>
                  <Link href="/experiences" className="hover:text-white">
                    Experiences
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-white">
                    Services
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
}