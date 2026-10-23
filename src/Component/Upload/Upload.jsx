import React, { useState } from "react";
import { useRef } from "react";
import { Eye,EyeOff } from "lucide-react";

const Upload = () => {

//     const emailRef = useRef()
//     const passRef = useRef()
// const fromAction = () => {
//    const email = emailRef.current.value
//    const password = passRef.current.value
//    console.log(email,password)
// }

// onSubmit form handling
const [show,setShow] = useState(false)
const [error,setError] = useState('')

const onSubmithandling = (e) => {
    e.preventDefault()
  const email = e.target.email.value
  const pass= e.target.password.value

  if(pass.length < 6){
     setError('Please input your Password')
     return
  }
  else{
    setError('')
  }
  e.target.reset()
  console.log(email,pass)
}



  return (
    <div>
      <h1>Hello Upload</h1>

      <form onSubmit={onSubmithandling}>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
        
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <div className="card-body">
                <fieldset className="fieldset">
                  <label className="label">Email</label>
                  <input name="email" type="email" className="input" placeholder="Email" />

                 <div className="relative">
                     <label className="label" 
                  >Password</label>
                  <input
                    name="password"
                    type={show? 'text' : 'password'}
                    className="input"
                    placeholder="Password"
                  />
                  <span  onClick={() => setShow(!show)} className="absolute top-6 right-1.5">
                    {show? <EyeOff /> : <Eye/>}
                  </span>
                 </div>
                  <p className="text-red-500">{error}</p>
                  <div>
                    <a className="link link-hover">Forgot password?</a>
                  </div>
                  <button className="btn btn-neutral mt-4">Login</button>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Upload;
