import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = { items: {} };

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = action.payload.id;
      const count = state.items[id]?.count || 0;
      return {
        ...state,
        items: {
          ...state.items,
          [id]: {
            ...action.payload,
            count: count + action.payload.count,
          },
        },
      };
    default:
      return state;
  }
}

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <CartContext.Provider value={{ cart: state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
