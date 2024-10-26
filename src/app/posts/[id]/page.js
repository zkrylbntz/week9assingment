// In Next.js, params is asynchronous. Therefore we need to make the component function async and wait params.

export default async function IdPage({ params }) {
  const myParams = await params;

  // async function handleSubmitPost(formData) {
  //   "use server";
  //   const users_name = formData.get("users_name");
  //   const post_title = formData.get("post_title");
  //   const post_content = formData.get("post_content");

  //   await db.query(
  //     `INSERT INTO posts (users_name, post_title, post_content) VALUES ($1, $2, $3)`,
  //     [users_name, post_title, post_content]
  //   );
  //   revalidatePath("/reviews");
  //   redirect("/reviews");
  return (
    <>
      <h1 className="flex flex-row justify-center">
        Post Number {myParams.id}
      </h1>
    </>
  );
}
