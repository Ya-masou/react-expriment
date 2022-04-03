import { createContext } from "react";

const user = {
  name: "hoge",
  email: "hoge@example.com",
};

export const UserContext = createContext(user);
