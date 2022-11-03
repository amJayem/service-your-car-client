import React from "react";
import { Link } from "react-router-dom";
import login from '../../assets/images/login/login.svg'

const Login = () => {
  return (
    <div className="hero my-20 py-20 bg-base-200 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 mx-auto my-0 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
          <p className="text-center pb-10">New to car servicing? 
          <Link className="text-orange-600" to='/register'> Sign up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
