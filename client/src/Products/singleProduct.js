import React, { useState } from "react";
import styles from "./singleProduct.module.css";
import { addToBasket } from "../basketSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

export default function SingleProduct({ prod, name, price, buyers }) {
  const dispatch = useDispatch();

  const productsData = [
    {
      id: 1,
      name: "Treadmill",
      image:
        "https://images.unsplash.com/photo-1648995361141-30676a75fd27?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
      price: 19999,
    },
    {
      id: 2,
      name: "Dumbbells Set",
      image:
        "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
      price: 4999,
    },
    {
      id: 3,
      name: "Exercise Bike",
      image:
        "https://images.unsplash.com/photo-1605235186583-a8272b61f9fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      price: 10999,
    },
    {
      id: 4,
      name: "Protien Powder",
      image:
        "https://post.healthline.com/wp-content/uploads/2022/06/2285051-The-12-Best-Protein-Powders-for-Weight-Loss-in-2022-732x549-Feature-732x549.jpg",
      price: 4999,
    },
    {
      id: 5,
      name: "Protien Bar",
      image:
        "https://m.media-amazon.com/images/I/81NjYYh8n2L._AC_UF1000,1000_QL80_.jpg",
      price: 199,
    },
    {
      id: 6,
      name: "Gym Bands",
      image:
        "https://cdn.shopify.com/s/files/1/0538/8307/6805/products/power-bands-group-1000x1000_1200x630.jpg?v=1660592371",
      price: 399,
    },
    {
      id: 7,
      name: "Hand Grip",
      image:
        "https://images.meesho.com/images/products/142742956/mvrr7_512.webp",
      price: 499,
    },
    
  ];
  const handleAddToCart = (productId) => {
    // Add logic to handle adding the product to the cart
    console.log(`Product ${productId} added to cart`);
  };

  const handleViewProduct = (productId) => {
    // Add logic to handle viewing the product details
    console.log(`Viewing product ${productId}`);
  };

  const addItemToBasket = ({ name, image, price }) => {
    const product = {
      name,
      price,
      courseImage: image,
    };
    dispatch(addToBasket(product));

    toast.success("Item added to basket");
  };

  return (
    <>
      {productsData.map((product) => (
        <div key={product.id} className={styles.product}>
          <div className={styles.imageWrapper}>
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
          </div>
          <div className={styles.productDetails}>
            <div className={styles.detailsWrapper}>
              <span className={styles.productName}>{product.name}</span>
              <span className={styles.productPrice}>₹{product.price}</span>
            </div>
            <div className={styles.buttonGroup}>
              <button
                className={styles.addToCartButton}
                style={{width: '100%', background: 'tomato'}}
                onClick={() =>
                  addItemToBasket({
                    name: product.name,
                    image: product.image,
                    price: product.price,
                  })
                }
              >
                Add to Cart
              </button>

            </div>
          </div>
        </div>
      ))}
    </>
  );
}
