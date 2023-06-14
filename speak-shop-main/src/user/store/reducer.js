import { useReducer } from "react";
import { cartReducer, initState } from "./action";
export const Store = () => {
  const [state, dispatch] = useReducer(cartReducer, initState);
  return { state, dispatch };
};
