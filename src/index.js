// require("dotenv").config({ path: "./env" });
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

// Important points about database
//  Assume your database is in another continent
//  And it will take some time and maybe throws some errors.
//  So we have to always use "try-catch" and "async-await" for db interaction.

// Approach 1: Using regular functions ❌
// Approach 1: Using IIFE ✅

/*
    * Not bad but it pollutes the index.js file, so we modularize the code
(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("APP ERROR: ", error);
      throw error;
    });

    app.listen(process.env.PORT, () => {
      console.log(`App is listening on port: ${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR: ", error);
  }
})();
*/

// Best Practice
