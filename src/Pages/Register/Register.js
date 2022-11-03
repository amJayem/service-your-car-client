import React from 'react';
import { Link } from 'react-router-dom';
import login from '../../assets/images/login/login.svg';

const Register = () => {
    return (
        <div className="hero my-20 py-20 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center">
          <img src={login} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-5xl font-bold">Sign Up</h1>
          <p className="py-6 mx-auto my-0 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
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
                <Link href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Sign up</button>
            </div>
          </div>
          <p className="text-center pb-10">Or Sign Up with</p>
          <p className="text-center pb-10">Already have an account? 
          <Link className="text-orange-600" to='/login'> Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default Register;