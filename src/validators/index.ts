import { ZodObject } from "zod";
import { Request, Response, NextFunction } from "express";
import { InvalidBodyRequest } from "../utils/app.error";

export const validateRequestBody = (schema: ZodObject) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body);
      console.log("Request Body is Valid");
      next();
    } catch (err) {
      throw new InvalidBodyRequest("Invalid Request Body");
    }
  };
};
