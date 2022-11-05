import React, { useContext } from "react";
import { Link } from "react-router-dom";
import login from '../../assets/images/login/login.svg';
import { AuthContext } from "../../Context/AuthProvider";
import {GoogleAuthProvider} from 'firebase/auth';

const Login = () => {
    const {signInUser, signInWithProvider} = useContext(AuthContext);
    
    const providerGoogle = new GoogleAuthProvider();

    const handleSubmit = e =>{
      e.preventDefault();
      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;
      // console.log(email, password);

      signInUser(email,password)
      .then(data=>console.log(data))
      .catch(e=>console.error('login error => ',e));

    };

    const handleGoogleSignIn = () =>{
      signInWithProvider(providerGoogle)
      .then(data=>console.log(data.user))
      .catch(e=>console.error('google login error => ',e))
    };

  return (
    <div className="hero my-20 py-20 bg-base-200 rounded-lg">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center">
          <img src={login} alt="" />
        </div>
        <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
          <h1 className="text-5xl font-bold">Login now!</h1>
          
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
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
                name="password"
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
              <button className="btn btn-primary">Login</button>
            </div>
            <Link className="btn" onClick={handleGoogleSignIn}>Sign in with google</Link>
          </div>
          <p className="text-center pb-10">New to car servicing? 
          <Link className="text-orange-600" to='/register'> Sign up</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
