// If you want to set up a profile page that renders data from clerk, you need:

// Auth() --> userId
// currentUser --> username, email address, ...

// The data I render here come from two places
// Some data comes from currentUser (the data collected by Clerk), other data comes from the user table in Supabase (bio, other user data...)

export default async function UserPage() {
  // const user = await currentUser()
  // You can console.log user to see what it looks like inside
  return (
    <>
      <h1 className="flex flex-row justify-center">
        This is your profile page
      </h1>
      {/* <h2>
        We can use optional chaining in case the user does not provide all the data we want to render
        Welcome, {user?.firstName}
        {user?.lastName}
      </h2> */}
      {/* <p>{user?.emailAddresses[0].emailAddresses}</p> */}
    </>
  );
}
