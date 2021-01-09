import express from "express";
import loader from "./loader";
import dotenv from "dotenv";

dotenv.config()

const port = process.env.SERVER_PORT;
const app = express();

loader(app);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
