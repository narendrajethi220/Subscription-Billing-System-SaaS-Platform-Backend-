import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
import { InvalidBodyRequest } from "../utils/app.error";
import { logger } from "../config/logger.config";

export const validateRequestBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      logger.info("Request Body is Valid");
      next();
    } catch (err) {
      throw new InvalidBodyRequest("Invalid Request Body");
    }
  };
};
