// You could have your navigation here
import {
  UserButton,
  SignInButton,
  SignUpButton,
  SignedOut,
  SignedIn,
} from "@clerk/nextjs";

import { auth } from "@clerk/nextjs/server";

import Link from "next/link";

export default async function NavBar() {
  const { userId } = await auth();
  return (
    <>
      <SignedOut>
        <div className="flex flex-row justify-center space-x-20 p-2.5">
          <SignInButton mode="modal">Sign-In</SignInButton>
          <SignUpButton mode="modal">Sign-Up</SignUpButton>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex flex-col space-y-20 p-2.5">
          <Link href="/">Home</Link>
          <Link href={`/user/${userId}`}>Profile Page</Link>
          <Link href="/posts">Posts</Link>
        </div>
      </SignedIn>
    </>
  );
}
