
const productReducer = (state = {}, action) => {
  switch (action.type) {
    case "ORDER_PRODUCTS_BY_PRICE":
      return {
        ...state,
        sort: action.sort,
        filteredItems: action.payload.items
      };
    case "FILTER_PRODUCTS_BY_SIZE":
      return {
        ...state,
        size: action.payload.size,
        filteredItems: action.payload.items
      };
    case "FETCH_PRODUCTS":
      return {
        items: action.payload,
        filteredItems: action.payload
      }
    default:
      return state;
  }
};

export default productReducer;