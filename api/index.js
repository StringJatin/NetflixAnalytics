import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import moviesRoute from "./routes/movies.js"
import listRoute from "./routes/lists.js";
import cors from "cors";

dotenv.config();

mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('connected to mongodb!');
  })
  .catch((err) => {
    console.log("not connected", err);
  });



const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoute);
app.use("/api/users",usersRoute);
app.use("/api/movies",moviesRoute);
app.use("/api/lists",listRoute);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});