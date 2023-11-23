"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, useEffect, useState } from "react";
const userContext = createContext();
const UserProvider = ({ children }) => {
  const [state, setState] = useState({
    user: {},
    token: "",
  });
  useEffect(() => {
    setState(JSON.parse(window.localStorage.getItem("auth")));
  }, []);
  const router = useRouter();
  const token = state && state.token ? state.token : "";
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_USER_API;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  axios.interceptors.response.use(function (response, error) {
    if (response.data.status !== "ERROR") {
      return response;
    } else {
      let res = error.response;
      if (res.status === 401 && res.config && !res.config._isRetryRequest) {
        setState(null);
        window.localStorage.removeItem("auth");
        router.push("/login");
        return res;
      }
    }
  });

  return (
    <userContext.Provider value={[state, setState]}>
      {children}
    </userContext.Provider>
  );
};
export { userContext, UserProvider };
