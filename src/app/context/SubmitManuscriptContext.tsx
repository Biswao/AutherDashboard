import { createContext } from "react";

export const SubmitManuscriptContext = createContext({
    stepFormData: {},
    setStepFormData: () => {},
    totalPrice: 0,
    setTotalPrice: () => {}
})