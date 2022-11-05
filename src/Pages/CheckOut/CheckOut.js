import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";
import toast from 'react-hot-toast'

const CheckOut = () => {
  const { title, price, _id } = useLoaderData();
  const {user} = useContext(AuthContext);

  const handleCheckout = (e) =>{
    e.preventDefault();
    const form = e.target;
    const name = `${form.firstName.value} ${form.lastName.value}`
    const email = user?.email || 'not registered';
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
        service: _id,
        serviceName: title,
        price,
        customer: name,
        email,
        phone,
        message
    }
    // console.log(order);

    fetch(`http://localhost:5000/orders`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.acknowledged){
            form.reset();
            toast('Order places..')
        }
    })
    .catch(e=>console.error('placing order error => ',e));
  };
  
  return (
    <div className="my-20">
      <form onSubmit={handleCheckout}>
        <h1 className="text-2xl font-semibold">
          You are about to order: {title}
        </h1>
        <p className="text-xl my-5">Price: {price}</p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="digit"
            name="phone"
            placeholder="phone"
            className="input input-bordered input-secondary w-full "
          />
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered  w-full "
            readOnly
            defaultValue={user?.email}
          />
        </div>
        <br />
        <textarea
          className="textarea textarea-accent w-full "
          name="message"
          placeholder="Your message"
        ></textarea>
        <br />
        <br />

        <input className="btn" type="submit" name="" id="" />
      </form>
    </div>
  );
};

export default CheckOut;
