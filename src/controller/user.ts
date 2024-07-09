import { Request, Response } from "express";

import * as UserServices from "../service/user";
import { getUserQuery } from "../interfaces/user";

export function getUsers(
  req: Request<any, any, any, getUserQuery>,
  res: Response
) {
  const { query } = req;
  const data = UserServices.getusers(query);
  res.json(data);
}

export function getUserByID(req: Request, res: Response) {
  const { id } = req.params;

  const data = UserServices.getUserByID(id);

  //req.body, req.query, req.params
  res.json(data);
}

export async function createUser(req: Request, res: Response) {
  const { body } = req;
  await UserServices.createUser(body);
  res.json(body);
}

export function updateUser(req: Request, res: Response) {
  res.json({ message: "user updated" });
}

export function deleteUser(req: Request, res: Response) {
  res.json({ message: "user deleted" });
}
