import { useEffect, useState } from "react";
const useManage = () => {
  const [manages, setManage] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((response) => response.json())
      .then((data) => setManage(data));
  }, []);
  return [manages, setManage];
};
export default useManage;