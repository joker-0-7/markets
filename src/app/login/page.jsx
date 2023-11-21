"use client";
import axios from "axios";
import AuthForm from "../components/AuthForm";
import Image from "next/image";
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { userContext } from "../context/userContext";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [state, setState] = useContext(userContext);
  const router = useRouter();
  if (state && state.token) router.push("/user");
  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .post(`/users/login`, {
        email,
        password,
      })
      .then((data) => {
        toast.success(data.data.msg);
        setState({
          user: data.data.user,
          token: data.data.token,
        });
        if (data.data.user) {
          window.localStorage.setItem("auth", JSON.stringify(data.data));
          router.push("/user");
        }
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };
  return (
    <div className="register">
      <div className="container">
        <div className="row d-flex align-items-center">
          <div className="col-6 d-flex align-items-center p-0">
            <div className="img bg-primary w-100 d-flex align-items-center justify-content-center">
              <Image
                src="/login.png"
                width={430}
                height={520}
                alt="regester-image"
              />
            </div>
          </div>
          <div className="col-6 main-form">
            <div className="form">
              <AuthForm
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                page={"lodin"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Login;
