"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import UserRouter from "@/app/router/userRouter";
import { toast } from "react-toastify";
import Image from "next/image";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescriptin] = useState("");
  const [price, setPrice] = useState("");
  const [section, setSection] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`/product/add`, {
        name,
        description,
        price,
        section,
      })
      .then((data) => {
        toast.success(data.data.msg);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };
  return (
    <UserRouter>
      <div className="add-product">
        <div className="container">
          <div className="header">
            <h1>اضافة منتج</h1>
          </div>
          <div className="form">
            <form className="w-100" onSubmit={handleSubmit}>
              <div className="row align-items-center">
                <div className="col-6 p-4 bg-light h-50">
                  <div className="name mb-4">
                    <input
                      type="text"
                      placeholder="اسم المنتج"
                      className="form-control"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="description mb-4">
                    <input
                      type="text"
                      placeholder="وصف المنتج"
                      className="form-control"
                      value={description}
                      onChange={(e) => setDescriptin(e.target.value)}
                    />
                  </div>
                  <div className="price mb-4">
                    <input
                      type="number"
                      placeholder="سعر المنتج"
                      className="form-control"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>
                  <div className="price mb-4">
                    <select
                      className="form-control"
                      value={section}
                      onChange={(e) => setSection(e.target.value)}
                    >
                      <option value="" disabled>
                        اختار قسم
                      </option>
                      <option value="الكترونيات">الكترونيات</option>
                      <option value="احذية">احذية</option>
                      <option value="ملابس">ملابس</option>
                    </select>
                  </div>
                </div>
                <div className="col-6 p-3 h-50">
                  <div className="upload-img h-100">
                    <label className="h-100">
                      اضافة صوره
                      <input
                        type="file"
                        hidden
                        // value={img}
                        onChange={(e) => {
                          setImg(e.target.files);
                        }}
                      />
                    </label>
                  </div>
                </div>
                <div className="col-12 p-0">
                  <button className="btn btn-primary w-100">
                    اضافة المنتج
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </UserRouter>
  );
};
export default AddProduct;
