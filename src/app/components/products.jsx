"use client";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
const Products = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    await axios
      .get(`product/get-products`)
      .then((data) => {
        setData(data.data);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="products ">
      <div className="row">
        {data.map((data) => {
          return (
            <div className="col-lg-3 col-sm-12" key={data._id}>
              <Link href={`/user/${data._id}`}>
                <div className="card">
                  <div className="card-head">{data.name}</div>
                  <div className="card-body">
                    {data.imgsUrl[0] ? (
                      <div className="img">
                        <Image
                          src={`http://localhost:5000/public/images/${
                            data && data.imgsUrl[0].url
                          }`}
                          alt="dfdf"
                          width={60}
                          height={60}
                        />
                      </div>
                    ) : (
                      ""
                    )}
                    <p>{data.description}</p>
                  </div>
                  <div className="card-footer">{data.price}</div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Products;
