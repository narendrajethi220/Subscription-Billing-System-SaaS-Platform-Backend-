import winston from "winston";
import { getCorrelationId } from "../utils/request.helper";
import DailyRotateFile from "winston-daily-rotate-file";

export const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp({
      format: "MM-DD-YYYY HH:mm:ss",
    }),
    winston.format.json(),
    winston.format.printf(({ level, message, transport, data }) => {
      const output = {
        level,
        message,
        transport,
        correlationId: getCorrelationId(),
        data,
      };
      return JSON.stringify(output);
    })
  ),
  transports: [
    new winston.transports.Console(),
    new DailyRotateFile({
      filename: "./logs/%DATE%-app.logs",
      datePattern: "YYYY-MM-DD",
    }),
  ],
});
