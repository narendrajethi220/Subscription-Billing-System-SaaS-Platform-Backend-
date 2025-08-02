import { Request, Response, NextFunction } from "express";
import { AppError } from "../utils/app.error";
import { success } from "zod";

export const genericErrorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
