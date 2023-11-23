"use client";
import { useState } from "react";
import axios from "axios";
import UserRouter from "@/app/router/userRouter";
import { toast } from "react-toastify";
import Image from "next/image";

const AddProduct = () => {
  const [imageURLS, setImageURLS] = useState([]);
  const [images, setImages] = useState([]);
  const [content, setContent] = useState({
    name: "",
    description: "",
    price: "",
    section: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    await images.map((img) => {
      formData.append("img", img);
    });
    formData.append("name", content.name);
    formData.append("description", content.description);
    formData.append("price", content.price);
    formData.append("section", content.section);
    await axios
      .post(`/product/add`, formData)
      .then((data) => {
        toast.success(data.data.msg);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };
  const uploadImageToClient = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImages((imageList) => [...imageList, e.target.files[0]]);
      setImageURLS((urlList) => [
        ...urlList,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };
  const handleChange = (e) => {
    setContent({ ...content, [e.target.name]: e.target.value });
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
                      name="name"
                      value={content.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="description mb-4">
                    <input
                      type="text"
                      placeholder="وصف المنتج"
                      className="form-control"
                      name="description"
                      value={content.description}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="price mb-4">
                    <input
                      type="number"
                      placeholder="سعر المنتج"
                      className="form-control"
                      name="price"
                      value={content.price}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="price mb-4">
                    <select
                      className="form-control"
                      value={content.section}
                      name="section"
                      onChange={handleChange}
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
                        onChange={uploadImageToClient}
                        accept="image/*"
                      />
                    </label>

                    <div className="images">
                      <div className="row">
                        {images.map((file, index) => {
                          return (
                            <div className="col-3" key={index}>
                              <p>{file.name}</p>
                              <Image
                                src={imageURLS[index]}
                                width={100}
                                height={100}
                                alt={file.name}
                              />
                            </div>
                          );
                        })}
                      </div>
                    </div>
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
