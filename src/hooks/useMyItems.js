import { useEffect, useState } from "react";
const useMyItems = () => {
  const [myitems, setMyItems] = useState([]);
  useEffect(() => {
    fetch("customers.json")
      .then((response) => response.json())
      .then((data) => setMyItems(data));
  }, []);
  return [myitems, setMyItems];
};
export default useMyItems;