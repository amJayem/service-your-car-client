import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import OrdersRow from "./OrdersRow";
import toast from 'react-hot-toast';

const Orders = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setOrders(data))
      .catch((e) => console.error("orders by email error => ", e));
  }, [user?.email]);


  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if(data.deletedCount > 0){
            toast('Order deleted successful');
            const remaining = orders.filter(order => order._id !== id);
            setOrders(remaining);
          }
        });
    }
  };

  const handleStatusUpdate = id =>{
    fetch(`http://localhost:5000/orders/${id}`,{
      method: 'PATCH',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'Approved'})
    })
    .then(res=>res.json())
    .then(data=>{
      // console.log(data);
      if(data.modifiedCount > 0){
        const remaining = orders.filter(order=>order._id !== id);
        const approving = orders.find(order=>order._id === id);
        approving.status = "Approved";
        const newOrders = [approving, ...remaining];
        setOrders(newOrders);
      }
    });
  };

  return (
    <div>
      <h1>You have {orders.length} orders </h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Delete</th>
              <th>Service Name</th>
              <th>Customer</th>
              <th>Operation</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {orders.map((order) => (
              <OrdersRow key={order._id} order={order} handleDelete={handleDelete}
              handleStatusUpdate={handleStatusUpdate}></OrdersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
