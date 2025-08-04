import { Request, Response, NextFunction } from "express";
import { asycnLocalStorage } from "../utils/request.helper";
import { v4 as uuidv4 } from "uuid";

export const attachCorrelationMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const correlationId = uuidv4();
  asycnLocalStorage.run({ correlationId: correlationId }, () => {
    next();
  });
};
