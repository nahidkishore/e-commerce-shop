const initSate = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const CartReducer = (state = initSate, action) => {
  let findPro;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      //console.log(action.payload.product.id);
      const { product, quantity } = action.payload;
      //console.log(product.id, quantity);
      const check = state.products.find((pd) => pd.id === product.id);
      if (check) {
        return state;
      } else {
        const TPrice = state.totalPrice + product.discountPrice * quantity;
        const TQuantity = state.totalQuantity + quantity;
        product.quantity = quantity;
        return {
          ...state,
          products: [...state.products, product],
          totalPrice: TPrice,
          totalQuantity: TQuantity,
        };
      }
    case "INC":
      findPro = state.products.find((pd) => pd.id === action.payload);
      index = state.products.findIndex((pd) => pd.id === action.payload);
      findPro.quantity += 1;
      state.products[index] = findPro;
      return {
        ...state,
        totalPrice: state.totalPrice + findPro.discountPrice,
        totalQuantity: state.totalQuantity + 1,
      };
      case 'DEC':
        findPro = state.products.find((pd) => pd.id === action.payload);
        index = state.products.findIndex((pd) => pd.id === action.payload);
        if(findPro.quantity>1){
          findPro.quantity -= 1;
      state.products[index] = findPro;
      return {
        ...state,
        totalPrice: state.totalPrice + findPro.discountPrice,
        totalQuantity: state.totalQuantity + 1,
      };
        }
        else{
          return state
        }
case 'REMOVE':
  findPro = state.products.find((pd) => pd.id === action.payload);
  const filtered=state.products.filter(pd=>pd.id !== action.payload)
  return{
    ...state, products: filtered, 
    totalPrice: state.totalPrice - findPro.discountPrice* findPro.quantity, totalQuantity: state.totalQuantity - findPro.quantity
  }
    default:
      return state;
  }
};

export default CartReducer;
