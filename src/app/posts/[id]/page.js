// In Next.js, params is asynchronous. Therefore we need to make the component function async and wait params.

export default async function IdPage({ params }) {
  const myParams = await params;
  return (
    <>
      <h1>Post Number {myParams.id}</h1>
    </>
  );
}
