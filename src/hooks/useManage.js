import { useEffect, useState } from "react";
const useManage = () => {
  const [manages, setManage] = useState([]);
  useEffect(() => {
    fetch("https://obscure-harbor-31706.herokuapp.com/product")
      .then((response) => response.json())
      .then((data) => setManage(data));
  }, []);
  return [manages, setManage];
};
export default useManage;