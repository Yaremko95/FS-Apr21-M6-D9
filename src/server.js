import express from "express";
import { sequlize } from "./db/index.js";
import cors from "cors";

const app = express();

const port = process.env.PORT || 5001;

app.use(cors());

app.use(express.json());

sequlize
  .sync({ force: true })
  .then(() => {
    app.listen(port, () => console.log("🚀 Server is running on port ", port));

    app.on("error", (error) =>
      console.log("🚀 Server is crashed due to ", error)
    );
  })
  .catch((e) => console.log(e));
