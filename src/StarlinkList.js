import React, { useEffect } from "react";
import axios from "axios";
import "./StarlinkList.css";

function StarlinkList() {
  useEffect(() => {
    const fetchStarlinks = async () => {
      const response = await axios.post(
        "https://api.spacexdata.com/v4/starlink/query",
        {
          query: {},
          options: { limit: 10 },
        }
      );
      console.log(response);
    };
    fetchStarlinks();
  }, []);

  // Meu componente Starlink
  return (
    <>
      <h1>Satélites Starlink</h1>
    </>
  );
}

export default StarlinkList;
