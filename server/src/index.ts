import express from "express";
import loader from "./loader";

const port = 4000;
const app = express();

loader(app);

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
