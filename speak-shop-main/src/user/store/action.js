import { ACTIONS } from "./constants";
import { toast } from "react-toastify";

export const initState = {
  cart: [],
};

export const cartReducer = (state = initState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ACTIONS.ADD_PRODUCT_CART: {
      const productFind = state.cart.find((e) => e?.id === payload?.id);
      if (productFind) {
        toast("Products already in the cart");
        return state;
      } else {
        toast("Add products to the cart");
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    }
    case ACTIONS.ADD_QUANTITY: {
      const indexProduct = state?.cart?.findIndex((e) => e?.id === payload);
      const newCart = [...state?.cart];
      newCart[indexProduct] = {
        ...newCart[indexProduct],
        quantity: newCart[indexProduct].quantity + 1,
      };
      return {
        ...state,
        cart: [...newCart],
      };
    }

    case ACTIONS.REDUCE_QUANTITY: {
      const indexProduct = state?.cart?.findIndex((e) => e?.id === payload);
      const newCart = [...state?.cart];
      if (newCart[indexProduct].quantity === 1) {
        return state;
      } else {
        newCart[indexProduct] = {
          ...newCart[indexProduct],
          quantity: newCart[indexProduct].quantity - 1,
        };
        return {
          ...state,
          cart: [...newCart],
        };
      }
    }

    default:
      return state;
  }
};


/*

  action () => {
    return {
      type: 'String',
      payload:
    }
  }

*/ 