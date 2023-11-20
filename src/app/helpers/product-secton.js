"use client";
const { default: axios } = require("axios");
const { useState, useEffect } = require("react");

const GetSection = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = axios
      .get("http://localhost:5000/api/product/product-section")
      .then((data) => {
        setData([...data.data]);
        console.log(data.data);
      });
  }, []);

  return (
    <div>
      {data.map((data) => {
        return <h1 key={data}>{data}</h1>;
      })}
    </div>
  );
};
export default GetSection;
