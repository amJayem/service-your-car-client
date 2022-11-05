import React, { useEffect, useState } from 'react';

const OrdersRow = ({order}) => {
    const { customer, email, price, service, serviceName} = order;
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
            <button className='btn btn-ghost'>X</button>
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
        <td>Purple</td>
        <th>
          <button className="btn btn-ghost btn-xs">details</button>
        </th>
      </tr>
    );
};

export default OrdersRow;