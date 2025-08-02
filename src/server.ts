import express from "express";
import { serverConfig } from "./config";
import v1Router from "./routes/v1";

const app = express();

const PORT = serverConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  console.log(`Server 🚀 on ${PORT}`);
});
