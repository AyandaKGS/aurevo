import { AuthenticateWithRedirectCallback } from "@clerk/nextjs";


export default function SSORedirectCallback() {
  return <AuthenticateWithRedirectCallback />;
}