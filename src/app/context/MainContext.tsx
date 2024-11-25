import { createContext } from "react";
import { MainContextType } from "../utils/interfaces/types";


export const MainContext = createContext<MainContextType>({
    active: "",
    setActive: () => {}
})