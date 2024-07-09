import config from "../config";
import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

export async function auth(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;

  if (!authorization) {
    next(new Error("Unauthenticated"));
    return;
  }

  const token = authorization.split(" ");

  if (token.length !== 2 || token[0] !== "Bearer") {
    next(new Error("Invalid token"));
    return;
  }

  const isValidToken = await verify(token[1], config.jwt.secret!);

  if (!isValidToken) {
    next(new Error("Invalid token"));
    return;
  }
}
