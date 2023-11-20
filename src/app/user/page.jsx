"use client";
import { useContext } from "react";
import { userContext } from "../context/userContext";
import UserRouter from "../router/userRouter";
const UserPage = () => {
  const [state, setState] = useContext(userContext);
  // const name = (state && state.user.name) || " ";
  return (
    <UserRouter>
      <div className="user-page">
        <div className="container">
          <h1> مرحبا بك يا </h1>
        </div>
      </div>
    </UserRouter>
  );
};
export default UserPage;
