import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { currentUser } from "@clerk/nextjs/server";

export default async function EditPage({ params }) {
  const myParams = await params;

  const user = await currentUser();

  const nickname = await db.query(
    `SELECT nickname FROM users_profile WHERE clerk_id = '${user.id}'`
  );
  const wrangledNickname = nickname.rows[0].nickname;

  const onePost = await db.query(
    `SELECT * FROM posts WHERE id = ${myParams.id}`
  );
  const wrangledPost = onePost.rows[0];

  async function handleEdit(formValues) {
    "use server";

    const formData = {
      users_name: formValues.get("users_name"),
      post_title: formValues.get("post_title"),
      post_content: formValues.get("post_content"),
    };

    await db.query(
      `UPDATE posts SET users_name = $1, post_title = $2, post_content = $3 WHERE id = ${myParams.id} RETURNING *`,
      [formData.users_name, formData.post_title, formData.post_content]
    );

    revalidatePath("/posts");
    revalidatePath(`/posts/${myParams.id}`);

    redirect(`/posts/${myParams.id}`);
  }

  return (
    <>
      <h1>Edit your posts</h1>
      <form action={handleEdit} className="flex flex-col items-center">
        <label htmlFor="users_name">Nickname:</label>
        <input
          type="text"
          name="users_name"
          id="users_name"
          className="text-black"
          defaultValue={wrangledNickname}
          readOnly
        />

        <label htmlFor="post_title">Edit your post title:</label>
        <input
          type="text"
          name="post_title"
          id="post_title"
          required
          className="text-black"
          defaultValue={wrangledPost.post_title}
        />

        <label htmlFor="post_content">Edit your post: </label>
        <input
          type="text"
          name="post_content"
          id="post_content"
          required
          className="text-black"
          defaultValue={wrangledPost.post_content}
        />

        <button
          type="submit"
          className="border-red-600 border-4 text-red-600 p-2 m-4"
        >
          Submit
        </button>
      </form>
    </>
  );
}
