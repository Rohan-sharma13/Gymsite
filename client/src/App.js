import React, { Component } from "react";
import About from "./AboutUsComponents/aboutUs";
import Contact from "./ContactComponents/contact";
import Home from "./HomeComponents/home";
import Membership from "./MembershipsComponents/members";
import { Route, Switch } from "react-router-dom";
import CoursDetails from "./CourseComponents/courses";
import AllCourses from "./CourseComponents/allCourses";
import Post from "./Posts/post";
import PostDetails from "./Posts/postDetails";
import SignIn from "./SignUpComponents/Signin";
import Products from "./Products/products";
import ProductDetail from "./Products/productDetails";
import ProductCart from "./Products/productCart";
export default class App extends Component {
  render() {
    return (
      <div
        style={{
          margin: "0",
          padding: "0",
          boxsizing: "content-box",
          overflow: "hidden",
        }}
      >
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/membership" component={Membership} />
          <Route path="/courses" component={AllCourses} />
          <Route path="/courseDetails" component={CoursDetails} />
          <Route path="/blogs" component={Post} />
          <Route path="/blogDetails" component={PostDetails} />
          <Route path="/signUp" component={SignIn} />
          <Route path="/signIn" component={SignIn} />
          <Route path="/products" component={Products} />
          <Route path="/productDetail" component={ProductDetail} />
          <Route path="/cart" component={ProductCart} />
        </Switch>
      </div>
    );
  }
}
