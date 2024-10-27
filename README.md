# Planning

- Concept and problem domain

- Wireframe

- Database schema
  - You need at least 2 tables (users and posts, for example)
  - One to many --> one user, many posts
  - Your foreign key should always be in the many table
    - Your foreign key in the many table should reference the clerk_id column in the one table

# Set up your app folder

# Set up Clerk

# Complete the pages with content for the user

- Remember to add a component from Radix or another library

# Deploy to Vercel

**Reflection**
Please also provide an assignment reflection in your project README.md file.

Required
🎯 What requirements did you achieve?

🎯 Were there any requirements or goals that you were unable to achieve?

🎯 If so, what was it that you found difficult about these tasks?

Optional
🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.

What useful external sources helped you complete the assignment (e.g YouTube tutorials)?

What errors or bugs did you encounter while completing your assignment? How did you solve them?

What went really well and what could have gone better?

Unfortunatley this week I'm submitting it as-is, I really wanted to make a significant improvement from my last Assignment, that being on the styling front but I'm just continuously running into a wall. I'm really happy with the functionality of the app in most areas, I had better tell you what it can do incase it's not obvious due to poor styling.
So you can sign in, or sign up. Signing Up leads you to create a user profile, fill in these fields, they'll get sent to the database and then render on your profile, as well as any currentUser stuff, also has the userId in the url.
From here, there is a very crude link to take you to a form that you can make a post. Here you have not only the form but the posts that you have made.
Here if you click on the Post title it will give you the option to edit or delete it, these both work. And if you click on Home it will show you the posts of other users.
I signed in with two different accounts and left a post so you could see theirs in the posts section and each others in the home section.
I tried adding a Radix component but I think my lack of CSS knowledge meant that a certain components couldn't be found.
I have set up a rather basic not found page, but you physically have to type not-found in after the / Which is a shame as I thought that if you just jumbled the userId I had in the url it would run it, but it appears not.
But I think that appart from the Radix component, I have all the other requirements in this app.

I never intend to submit my assignments with such poor content and style. I had every intention to keep this growing on my BookReviews and BookBlog page. By submitting some reviews, and even with an intention to add comments to reviews/posts. But time isn't on my side on the weekends, and with also having to look for jobs at the moment, my weekday evenings are very limited due to not wanting to be burnt out for class the next day. And with that as I come to 9 on a Sunday and I've not been getting anywhere really since about 7, I think to draw a line under it. And as things aren't seeming to work for me the content and context gets lost. Talking it out, right now, I think there must be a small thing that maybe I'm missing or a little bit of logic that might help me as I try to target these elements I want to style.

If you could recommend anything in terms on styling that you think may help I would gladly listen, not matter how basic it is. It's hard because if anything the styling is what I want to be the best at, I am inspired greatly by creatively designed websites. Sorry again for the styling let down.
