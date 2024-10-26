// In Next.js, params is asynchronous. Therefore we need to make the component function async and wait params.
import { db } from "@/utils/dbConnection";
import Link from "next/link";
export default async function IdPage({ params }) {
  const myParams = await params;

  const posts = await db.query(`SELECT * FROM posts WHERE id = ${myParams.id}`);
  const wrangledPosts = posts.rows;

  return (
    <>
      <h1 className="flex flex-row justify-center">
        Post Number {myParams.id}
      </h1>
      {wrangledPosts.map((post) => (
        <div key={post.id}>
          <p>{post.users_name}</p>
          <h3>Post title: {post.post_title}</h3>
          <p>{post.post_content}</p>
          <Link
            href={`/posts/${myParams.id}/delete`}
            className="text-red-600 border-2 border-red-600"
          >
            Delete
          </Link>
          <Link
            href={`/posts/${myParams.id}/edit`}
            className="text-red-600 border-2 border-red-600"
          >
            Edit
          </Link>
        </div>
      ))}
    </>
  );
}

{
  /* <Link
        href={`/coasters/${params.id}/edit`}
        className="text-amber-600 border-2 border-emerald-700"
      >
        Edit this coaster
      </Link>
      <br />
      <Link
        href={`/coasters/${params.id}/delete`}
        className="text-red-600 border-2 border-yellow-300"
      >
        Delete this coaster
      </Link> */
}
