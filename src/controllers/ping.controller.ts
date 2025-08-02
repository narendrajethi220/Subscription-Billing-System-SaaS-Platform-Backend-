import { Request, Response, NextFunction } from "express";
export const pingHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send("Pong");
};
