"use client";
import axios from "axios";
import { useEffect } from "react";

const SingleProduct = () => {
  const getData = async () => {
    await axios
      .get(`/product/get-product/${window.location.pathname.split("/")[2]}`)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return <h1>Single Product</h1>;
};
export default SingleProduct;
