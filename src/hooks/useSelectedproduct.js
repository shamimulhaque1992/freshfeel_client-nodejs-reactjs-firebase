import { useEffect, useState } from "react";
const useSelectedproduct = () => {
  const [select, setSelect] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/product")
      .then((response) => response.json())
      .then((data) => setSelect(data));
  }, []);
  return [select, setSelect];
};
export default useSelectedproduct;