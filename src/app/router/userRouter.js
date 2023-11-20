import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { userContext } from "../context/userContext";
import Loading from "../components/loading";

const UserRouter = ({ children }) => {
  const [ok, setOk] = useState(false);
  const [state] = useContext(userContext);
  const router = useRouter();
  useEffect(() => {
    if (state && state.token) checkCurrent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state && state.token]);
  const checkCurrent = async () => {
    try {
      const { data } = await axios.get(`users/current`);
      if (data.ok) setOk(true);
    } catch (err) {
      router.push("/login");
    }
  };
  process.browser &&
    state === null &&
    setTimeout(() => {
      checkCurrent();
    }, 1000);
  return !ok ? <Loading /> : <>{children}</>;
};
export default UserRouter;
