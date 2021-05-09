import React, { useEffect, useState } from "react";
import db from "../firebase";
import "./PlanScreen.css";

const PlanScreen = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // db.collection();
  }, []);
  return (
    <div className="planScreen">
      <div></div>
    </div>
  );
};

export default PlanScreen;
