import {createContext} from 'react';

// 외부에서도 사용하기 위해 export
export const CartContext = createContext({
  CartItem: [],
});
