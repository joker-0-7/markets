"use client";
import axios from "axios";
import AuthForm from "../components/AuthForm";
import { useState, useContext } from "react";
import Image from "next/image";
import { userContext } from "../context/userContext";
import { useRouter } from "next/navigation";
const SignUp = () => {
  const router = useRouter();
  const [state, setState] = useContext(userContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  if (state && state.token) router.push("/user");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const sendDate = await axios
      .post(`/users/register`, {
        email,
        password,
        name,
        phone,
        address,
        city,
        zip,
      })
      .then((data) => {
        console.log(data.data.msg);
        setEmail("");
        setPassword("");
        setName("");
        setPhone("");
        setAddress("");
        setCity("");
        setZip("");
      });
  };
  return (
    <div className="register">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-6 main-form">
            <div className="form">
              <AuthForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                name={name}
                setName={setName}
                phone={phone}
                setPhone={setPhone}
                address={address}
                setAddress={setAddress}
                city={city}
                setCity={setCity}
                zip={zip}
                setZip={setZip}
                handleSubmit={handleSubmit}
                page={"register"}
              />
            </div>
          </div>
          <div className="col-6 d-flex align-items-center p-0">
            <div className="img bg-primary w-100 d-flex align-items-center justify-content-center img-register">
              <Image
                src="/regester.gif"
                width={480}
                height={630}
                alt="register-image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
