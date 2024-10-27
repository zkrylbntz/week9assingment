// You could have your navigation here
import "./NavBar.css";
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
          <SignInButton className="" mode="modal">
            Sign-In
          </SignInButton>
          <SignUpButton mode="modal">Sign-Up</SignUpButton>
        </div>
      </SignedOut>
      <div className="signed-in">
        <SignedIn>
          <UserButton className="p-4" />
          <div className="flex flex-col space-y-20 p-2.5">
            <div className="home">
              <Link className="border-b" href="/home">
                Home
              </Link>
            </div>
            <div className="profile">
              <Link className="border-b" href={`/user/${userId}`}>
                Profile
              </Link>
            </div>
            <div className="posts">
              <Link className="border-b" href={`/posts`}>
                Posts
              </Link>
            </div>
          </div>
        </SignedIn>
      </div>
    </>
  );
}
