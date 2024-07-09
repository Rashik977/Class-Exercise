import { getUserQuery, User } from "../interfaces/user";

const users: User[] = [
  {
    name: "Rashik",
    id: "1",
    email: "rkoirala43@gmail.com",
    password: "$2b$10$sfRgQfS18eDljYbM54xXSOOy9epcBwcIwkoCEBY3QTegEazUbBMIG",
  },
];

export function getUserByID(id: string) {
  return users.find(({ id: userId }) => userId === id);
}

export function createUser(user: User) {
  return users.push({
    ...user,
    id: `${users.length + 1}`,
  });
}

export function getUsers(query: getUserQuery) {
  const { q } = query;
  if (q) {
    return users.filter(({ name }) => name.toLowerCase().includes(q));
  }
  return users;
}

export function getUserByEmail(email: string) {
  return users.find((user) => user.email === email);
}
