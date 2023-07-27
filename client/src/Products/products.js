import React, { useState, useEffect } from "react";
import SingleProduct from "./singleProduct";
import Styles from "./products.module.css";
import NavBar from "../navbar";
import Fotter from "../footer";
import Styles_1 from "../MembershipsComponents/members.module.css";
import axios from "axios";
import Loader from "react-loader-spinner";
import { FaCartArrowDown } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";

export default function Products() {
  const history = useHistory();
  const [values, setValues] = useState({ name: "" });
  const [loading, isLoading] = useState(false);
  const [load, setLoad] = useState(true);
  // const [products, setProducts] = useState({ items: [] });
  const [value, setValue] = useState({ dropdown: "option" });

  // const handleChange = (event) => {
  //   setValue({ dropdown: event.target.value });
  //   isLoading(false);
  //   setLoad(false);
  //   event.target.value === "Highest"
  //     ? axios
  //         .get(`https://gymhut.herokuapp.com/products/pricey`)
  //         .then((response) => {
  //           setProducts({ items: response.data });
  //           isLoading(true);
  //         })
  //         .catch((error) => {
  //           console.log("error is :", error);
  //         })
  //     : event.target.value === "Lowest"
  //     ? axios
  //         .get(`https://gymhut.herokuapp.com/products/cheapest`)
  //         .then((response) => {
  //           setProducts({ items: response.data });
  //           isLoading(true);
  //         })
  //         .catch((error) => {
  //           console.log("error is :", error);
  //         })
  //     : axios
  //         .get(`https://gymhut.herokuapp.com/products`)
  //         .then((response) => {
  //           setProducts({ items: response.data });
  //           isLoading(true);
  //           setLoad(true);
  //         })
  //         .catch((error) => {
  //           console.log("error is :", error);
  //         });
  // };

  const handleSubmit = (event) => {
    alert("Your favorite {submit} flavor is: " + value.dropdown);
    event.preventDefault();
  };

  const products = [
    {
      name: "Gym T-shirt",
      price: 1000,
      prod: "asf",
      buyers: 100,
    },
  ];

  // const getProductByName = () => {
  //   isLoading(false);
  //   setLoad(true);
  //   axios
  //     .get(`https://gymhut.herokuapp.com/products/${values.name}`)
  //     .then((response) => {
  //       setProducts({ items: response.data });
  //       setValues({ name: "" });
  //       isLoading(true);
  //     })
  //     .catch((error) => {
  //       console.log("error is :", error);
  //     });
  // };

  // useEffect(() => {
  //   axios
  //     .get("https://gymhut.herokuapp.com/products")
  //     .then((response) => {
  //       setProducts({ items: response.data });
  //       isLoading(true);
  //     })
  //     .catch((error) => {
  //       console.log("error is :", error);
  //     });
  // }, []);

  // const setAllProducts = () => {
  //   axios
  //     .get("https://gymhut.herokuapp.com/products/allProducts")
  //     .then((response) => {
  //       setProducts({ items: response.data });
  //       isLoading(true);
  //       setLoad(false);
  //     })
  //     .catch((error) => {
  //       console.log("error is :", error);
  //     });
  // };
  return (
    <div style={{ backgroundColor: "rgb(240, 245, 245)" }}>
      <NavBar type="product" />
      <div className={Styles_1.topGrid}>
        <div className={Styles_1.cardborderTop}>___</div>
        <div className={Styles_1.cardHeading}>Our Products</div>
        <div className={Styles_1.imageSub_heading}>
          Get the best of our Gym merchandise cheaply
        </div>
      </div>

      {/* <div className={Styles.getProducts}>
        <div className={Styles.searchBar}>
          <div className={Styles.search}>
            <input
              type="text"
              placeholder="Search By Name"
              className={Styles.search}
              value={values.name}
              onChange={(e) => setValues({ name: e.target.value })}
            />
          </div>
          <div className={Styles.searchLogo}>
            <BsSearch onClick={() => {}} />
          </div>
        </div>
        <div className={Styles.dropdownItem}>
          <form onSubmit={handleSubmit}>
            <label className={Styles.sortHeading}>
              Sort By:
              <select
                value={value.dropdown}
                // onChange={handleChange}
                className={Styles.dropdown}
              >
                <option value="option">Select Type</option>
                <option value="Highest">Highest</option>
                <option value="Lowest">Lowest</option>
              </select>
            </label>
          </form>
        </div>
      </div> */}
      {/* <div><h6>No of Items in the Cart</h6><h5>{length}</h5></div> */}

      <div className={Styles.products}>
        {products.map(({ name, price, type, buyers }) => (
          <SingleProduct
            name={name}
            price={price}
            prod={type}
            buyers={buyers}
          />
        ))}
      </div>
      <Fotter />
    </div>
  );
}
