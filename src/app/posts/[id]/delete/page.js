import { db } from "@/utils/dbConnection";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function DeletePost({ params }) {
  const myParams = await params;

  async function handleDelete() {
    "use server";

    await db.query(`DELETE FROM posts WHERE id = ${myParams.id} `);

    revalidatePath("/posts");

    redirect("/posts");
  }

  return (
    <>
      <h1>Deleting a post....</h1>

      <form action={handleDelete}>
        <button type="submit" className="text-red-500 border-2 border-red-500">
          Are you sure you want to delete this post?
        </button>
      </form>
    </>
  );
}
