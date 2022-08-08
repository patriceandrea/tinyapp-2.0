import React from "react";
import { User } from "../types/user"

type UserContextProviderProps = {
  children: React.ReactNode
}

type UserContextType = {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}


export const UserContext = React.createContext<UserContextType | null>(null);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = React.useState<User | null>(null);
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}




// type UserContextProviderProps = {
//   children: React.ReactNode 
// }

// export const UserContextProvider = ({
//   children,
// }: UserContextProviderProps: any) => {
//   return <UserContext.Provider value={{ User }}></UserContext.Provider>
// }

