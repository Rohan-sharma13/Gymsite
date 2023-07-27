export const add = (prodName, prodPrice, prodType) => {
  return {
    type: "ADD",
    payload: {
      prodName: prodName,
      price: prodPrice,
      prodType: prodType,
      actualPrice: prodPrice,
    },
  };
};

export const incProd = (prodName) => {
  return {
    type: "INCQUANTITY",
    payload: {
      prodName: prodName,
    },
  };
};

export const decProd = (prodName) => {
  return {
    type: "DECQUANTITY",
    payload: {
      prodName: prodName,
    },
  };
};

export const removeProd = (prodName) => {
  return {
    type: "REMOVE",
    payload: {
      prodName: prodName,
    },
  };
};

export const removeAll = () => {
  return {
    type: "REMOVEALL",
    payload: {},
  };
};
