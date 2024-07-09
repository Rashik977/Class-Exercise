import express from "express";
import config from "./config";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(config.port, () => {
  console.log("Server is running on port 3000");
});