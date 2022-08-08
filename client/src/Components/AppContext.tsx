import React from "react";
import { User } from "../types/user"


const defaultUser = null;
const UserContext = React.createContext<User | null>(defaultUser)

export default UserContext;
