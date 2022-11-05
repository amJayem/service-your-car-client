import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((e) => console.error("orders by email error => ", e));
  }, [user?.email]);

  return (
    <div>
      <h1>You have {orders.length} orders </h1>
    </div>
  );
};

export default Orders;