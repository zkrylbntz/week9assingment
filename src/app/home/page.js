import { db } from "@/utils/dbConnection";
import { currentUser } from "@clerk/nextjs/server";

export default async function Home() {
  const user = await currentUser();

  const posts = await db.query(
    `SELECT * FROM posts WHERE users_profile_clerk_id != '${user.id}'`
  );

  const wrangledPosts = posts.rows;

  return (
    <>
      <h1 className="flex flex-row justify-center">Welcome too....</h1>
      {wrangledPosts.map((post) => (
        <div key={post.id}>
          <p>{post.users_name}</p>
          <h3>Post title: {post.post_title}</h3>
          <p>{post.post_content}</p>
        </div>
      ))}
    </>
  );
}
