import { createContext, useContext } from "react";

export const MouseEnterContext = createContext(undefined);

export const useMouseEnter = () => {
  const context = useContext(MouseEnterContext);
  if (!context) {
    throw new Error("useMouseEnter must be used inside CardContainer");
  }
  return context;
};
