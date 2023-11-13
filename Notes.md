### Adding User and Video model: Index, Aggregate, Hooks, JWT

1. We use index when searching is required.
2. Videos and Images files are stored on other services like cloudinary and aws.
3. Information about videos duration is provided by cloudinary.
4. Here, we use `mongoose-aggregate-paginate-v2` to write comples aggregate pipelines.
5. It is just like a middleware, but for mongoose.
6. Here, we use `bcrypt and jsonwebtoken` for authentication and cryptography uses.
7. Now we use mongoose hooks to hash the password. Specifically, we use the "Pre" hook, ie, just encrypt before saving into database. More about hooks here "https://mongoosejs.com/docs/middleware.html"
8. After password hashing, we create a custom method inside the schema for validation of password.
9. JWT is a bearer token. Here data is granted to the token bearer.
10. For authentication, we use both sessions and cookies.
11. Create a method for generating a `refresh token` in user schema

### File handling and cloudinary

1. There are 2 packages for file upload `express-fileupload` and `multer`
