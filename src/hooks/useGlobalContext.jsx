import { useContext } from "react";
import { GlobalContext } from "../context/globalContext";

function useGlobalContext() {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error(
      "useGlobalContext() must be in the GlobalContextProvider()"
    );
  }
  return context;
}

export { useGlobalContext };
