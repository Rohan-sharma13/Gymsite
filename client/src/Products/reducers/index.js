const state = {
  products: [],
  quantity: [],
  price: [],
  type: [],
  actualPrice: [],
};

const productReducer = (reducer_state = state, action) => {
  switch (action.type) {
    case "ADD":
      if (reducer_state.products.includes(action.payload.prodName)) {
        return reducer_state;
      } else {
        reducer_state.products.push(action.payload.prodName);
        reducer_state.price.push(action.payload.price);
        reducer_state.actualPrice.push(action.payload.price);
        reducer_state.quantity.push(1);
        reducer_state.type.push(action.payload.prodType);
        return reducer_state;
      }
    case "INCQUANTITY":
      let index = reducer_state.products.indexOf(action.payload.prodName);
      console.log("Hi");
      reducer_state.price[index] =
        parseInt(reducer_state.price[index]) +
        parseInt(reducer_state.actualPrice[index]);
      reducer_state.quantity[index] =
        parseInt(reducer_state.quantity[index]) + 1;
      return reducer_state;
    case "DECQUANTITY":
      let newIndex = reducer_state.products.indexOf(action.payload.prodName);
      if (parseInt(reducer_state.quantity[newIndex]) === 1) {
        if (newIndex > -1) {
          reducer_state.products.splice(newIndex, 1);
          reducer_state.price.splice(newIndex, 1);
          reducer_state.type.splice(newIndex, 1);
          reducer_state.actualPrice.splice(newIndex, 1);
          reducer_state.quantity.splice(newIndex, 1);
          return reducer_state;
        } else console.log("item do not exist");
      } else {
        reducer_state.price[newIndex] =
          parseInt(reducer_state.price[newIndex]) -
          parseInt(reducer_state.actualPrice[newIndex]);
        reducer_state.quantity[newIndex] =
          parseInt(reducer_state.quantity[newIndex]) - 1;
        return reducer_state;
      }
    case "REMOVE":
      let item = reducer_state.products.indexOf(action.payload.prodName);

      if (item > -1) {
        reducer_state.products.splice(item, 1);
        reducer_state.price.splice(item, 1);
        reducer_state.type.splice(item, 1);
        reducer_state.actualPrice.splice(item, 1);
        reducer_state.quantity.splice(item, 1);
      } else console.log("item do not exist");
      return reducer_state;
    case "REMOVEALL":
      console.log("reducer fired");
      reducer_state.products = [];
      reducer_state.price = [];
      reducer_state.actualPrice = [];
      reducer_state.quantity = [];
      reducer_state.type = [];
      return reducer_state;
    default:
      return reducer_state;
  }
};

export default productReducer;
