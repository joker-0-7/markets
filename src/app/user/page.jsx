"use client";
import { useContext } from "react";
import { userContext } from "../context/userContext";
import UserRouter from "../router/userRouter";
import Products from "../components/products";
const UserPage = () => {
  const [state, setState] = useContext(userContext);
  return (
    <UserRouter>
      <div className="user-page">
        <div className="container">
          <h1> مرحبا بك يا {(state && state.user.name) || " "}</h1>
          <Products />
        </div>
      </div>
    </UserRouter>
  );
};
export default UserPage;
