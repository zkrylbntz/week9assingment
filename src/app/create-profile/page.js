//! You can nest this route in any other route, if you want. The user should only see this route after being redirected from the sign-up page
// The sign-up page needs the following elements:
// Connection with the db
// Auth() and userId
// A form to collect the user's profile data
// SQL query to insert the user's data into the database
// We need to redirect tbe user to the homepage once they submit the profile form
// A suggestion: you could have a try and catch for your SQL query

export default function createProfilePage() {
  return (
    <>
      <h1 className="flex flex-row justify-center">Create Profile Page</h1>
    </>
  );
}
