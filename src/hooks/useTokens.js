import axios from "axios";
import { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");
  useEffect(() => {
    const getToken = async () => {
      const email = user?.user?.email;
      if (email) {
        const { data } = await axios.post(
          "https://obscure-harbor-31706.herokuapp.com/login",
          { email }
        );
        setToken(data.token);
        localStorage.setItem("token", data.token);
      }
    };
    getToken();
  }, [user]);
  return [token];
};

export default useToken;
