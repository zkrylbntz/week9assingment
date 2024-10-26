// If you want to set up a profile page that renders data from clerk, you need:
import { currentUser } from "@clerk/nextjs/server";
import profileStyles from "@/app/user/user.module.css";
import Link from "next/link";
import { db } from "@/utils/dbConnection";
// Auth() --> userId
// currentUser --> username, email address, ...

// The data I render here come from two places
// Some data comes from currentUser (the data collected by Clerk), other data comes from the user table in Supabase (bio, other user data...)

export default async function UserPage({ params }) {
  const myParams = await params;

  ("use server");
  const user = await currentUser();
  // You can console.log user to see what it looks like inside
  const users_profile = await db.query(
    `SELECT * FROM users_profile WHERE clerk_id = '${user.id}'`
  );
  const wrangledUsers_profile = users_profile.rows[0];

  return (
    <>
      <h1 className="flex flex-row justify-center">
        This is your profile page {user?.firstName}
      </h1>
      <div className={profileStyles.user_profile}>
        <h2>
          Username: {user?.username}
          Full name: {user?.firstName}
          {user?.lastName}
        </h2>
      </div>
      <p>{wrangledUsers_profile.nickname}</p>
      <p>{wrangledUsers_profile.bio}</p>

      <p>
        Something on your mind? Make a<Link href="/posts">POST!</Link>
      </p>
    </>
  );
}
