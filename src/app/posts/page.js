import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
import Link from "next/link";

export default async function PostsPage() {
  const { userId } = await auth();
  const user = await currentUser();

  const nickname = await db.query(
    `SELECT nickname FROM users_profile WHERE clerk_id = '${user.id}'`
  );
  const wrangledNickname = nickname.rows[0].nickname;

  const posts = await db.query(
    `SELECT * FROM posts WHERE users_profile_clerk_id = '${user.id}'`
  );

  const wrangledPosts = posts.rows;

  async function handleSubmitPost(formData) {
    "use server";
    const users_name = formData.get("users_name");
    const post_title = formData.get("post_title");
    const post_content = formData.get("post_content");
    const users_profile_clerk_id = formData.get("users_profile_clerk_id");

    await db.query(
      `INSERT INTO posts (users_name, post_title, post_content, users_profile_clerk_id) VALUES ($1, $2, $3, $4)`,
      [users_name, post_title, post_content, users_profile_clerk_id]
    );
    revalidatePath("/posts");
    redirect("/posts");
  }

  return (
    <>
      <h1 className="flex flex-row justify-center">Make a post</h1>
      <form
        action={handleSubmitPost}
        className="flex flex-col items-center p-4 justify-evenly h-2/5"
      >
        <label htmlFor="users_name">Name:</label>
        <input
          className=" text-black"
          type="text"
          name="users_name"
          id="users_name"
          defaultValue={wrangledNickname}
          required
        />
        <label htmlFor="post_title">Post title:</label>
        <input
          className=" text-black"
          type="text"
          name="post_title"
          id="post_title"
          placeholder="Title"
        />
        <label htmlFor="post_content">Post:</label>
        <input
          className=" text-black"
          type="text"
          name="post_content"
          id="post_content"
          placeholder="Post"
          required
        />
        <label htmlFor="user_profile_clerk_id"></label>
        <input
          type="hidden"
          name="users_profile_clerk_id"
          id="users_profile_clerk_id"
          defaultValue={userId}
        />
        <button type="submit">POST</button>
      </form>
      <h1>Your posts...</h1>

      {wrangledPosts.map((post) => (
        <div key={post.id}>
          <p>{post.users_name}</p>
          <Link href={`/posts/${post.id}`}>Post title: {post.post_title}</Link>
          <p>{post.post_content}</p>
        </div>
      ))}
    </>
  );
}
