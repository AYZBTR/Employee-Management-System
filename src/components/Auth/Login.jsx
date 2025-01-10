import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("email:", email);
    console.log("password:", password);
  };
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            className=" text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-grey"
            type="email"
            placeholder="Enter your Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
            className=" text-white outline-none bg-transparent border-2 border-emerald-600 rounded-full mt-3 text-xl py-3 px-5 placeholder:text-grey"
            type="Password"
            placeholder="Enter your Passwrod"
          />
          <button className=" mt-5 text-white outline-none border-white bg-emerald-600 rounded-full text-xl py-3 px-5 placeholder:text-white">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
