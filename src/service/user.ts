import { getUserQuery, User } from "../interfaces/user";
import * as UserModel from "../model/user";

import bcrypt from "bcrypt";

export function getUserByID(id: string) {
  const data = UserModel.getUserByID(id);

  if (!data) {
    return { error: `User with id: ${id} not found` };
  }
  return data;
}

export async function createUser(user: User) {
  const password = await bcrypt.hash(user.password, 10);
  user.password = password;
  UserModel.createUser(user);
}

export function getusers(query: getUserQuery) {
  return UserModel.getUsers(query);
}

export function getUserByEmail(email: string) {
  return UserModel.getUserByEmail(email);
} 
