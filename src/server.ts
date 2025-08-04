import express from "express";
import { serverConfig } from "./config";
import v1Router from "./routes/v1";
import { logger } from "./config/logger.config";

const app = express();

const PORT = serverConfig.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", v1Router);

app.listen(PORT, () => {
  logger.info(`Server 🚀 on ${PORT}`);
});
