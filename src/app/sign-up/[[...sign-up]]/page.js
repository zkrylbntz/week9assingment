import { SignUp } from "@clerk/nextjs";
// The sign-up page needs the following elements

// Connection with DB
import { db } from "@/utils/dbConnection";

// Auth() and userId
import { auth } from "@clerk/nextjs/server";

// A form to collect the user's profile data

// SQL query to insert the user's data into the database

// We need to redirect the user to the homepage once they submit the profile form
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// A suggestion: you could have a try and catch for your SQL query
export default async function SignUpPage() {
  const { userId } = await auth();
  async function handleSubmitProfile(formData) {
    "use server";
    const nickname = formData.get("nickname");
    const age = formData.get("age");
    const location = formData.get("location");
    const hometown = formData.get("hometown");
    const bio = formData.get("bio");
    const clerk_id = formData.get("clerk_id");

    await db.query(
      `INSERT INTO users_profile (nickname, age, location, hometown, bio, clerk_id) VALUES ($1, $2, $3, $4, $5, $6)`,
      [nickname, age, location, hometown, bio, clerk_id]
    );
    revalidatePath("/sign-up");
    redirect(`/user/${userId}`);
  }
  return (
    <>
      <div className="flex flex-col items-center">
        <SignUp />

        <form action={handleSubmitProfile}>
          <label htmlFor="nickname">Nickname</label>
          <input
            className=" text-black"
            type="text"
            name="nickname"
            id="nickname"
            required
          />
          <label htmlFor="age">Age</label>
          <input
            className=" text-black"
            type="number"
            name="age"
            id="age"
            required
          />
          <label htmlFor="location">Location</label>
          <input
            className=" text-black"
            type="text"
            name="location"
            id="location"
            required
          />
          <label htmlFor="hometown">Hometown</label>
          <input
            className=" text-black"
            type="text"
            name="hometown"
            id="hometown"
            required
          />

          <label htmlFor="bio">Biography</label>
          <textarea
            rows={4}
            cols={40}
            className=" text-black"
            type="text"
            name="bio"
            id="bio"
            required
          />
          <label htmlFor="clerk_id"></label>
          <input
            type="hidden"
            name="clerk_id"
            id="clerk_id"
            defaultValue={userId}
          />
          <button type="submit">Submit profile</button>
        </form>
      </div>
    </>
  );
}
