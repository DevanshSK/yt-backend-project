import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// Initialize the express app.
const app = express();

// Middlewares setup
// Setup CORS middleware
// TODO: Explore cors docs
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Setup json data format
app.use(express.json({ limit: "16kb" }));

// Setup data handling from url
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);

// Setup static files
app.use(express.static("public"));

// Setup cookie parser
app.use(cookieParser());

export { app };
