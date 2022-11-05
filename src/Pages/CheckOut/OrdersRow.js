import React, { useEffect, useState } from 'react';

const OrdersRow = ({order, handleDelete, handleStatusUpdate}) => {
    const { _id, customer, email, price, service, serviceName, status} = order;
    // console.log(order);
    const [orderService, setOrderService] = useState({});

    useEffect(()=>{
        fetch(`http://localhost:5000/services/${service}`)
        .then(res=>res.json())
        .then(data=> setOrderService(data))
    },[service]);    

    return (
        <tr>
        <th>
          <label>
            {/* <input type="checkbox" className="checkbox" /> */}
            <button onClick={()=>handleDelete(_id)} className='btn btn-ghost'>X</button>
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src={orderService.img} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">{price}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br/>
          <span className="badge badge-ghost badge-sm">{customer} </span>
        </td>
        <th>
          <button onClick={()=>handleStatusUpdate(_id)} className="btn btn-primary btn-xs">{status?status:'pending'}</button>
        </th>
      </tr>
    );
};

export default OrdersRow;