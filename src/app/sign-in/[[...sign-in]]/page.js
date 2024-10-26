// You can use the SignIn component from clerk
import { SignIn } from "@clerk/nextjs";
export default function SignInPage() {
  return (
    <>
      <h1 className="flex flex-row justify-center">Sign In</h1>
      <SignIn />
    </>
  );
}
