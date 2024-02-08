import { useState } from "react";

const Form = ({setData}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      email: email,
      password: password,
    };
    setData(info);
  };

  return (
    <>
      <form
        className="card-body max-w-xs  sm:max-w-sm  bg-[#acc9d6c5] lg:bg-[#ACC9D6] rounded-md"
        onSubmit={handleSubmit}
      >
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-black">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            className="input input-bordered bg-slate-100 text-gray-700 focus:border-2 focus:border-slate-400 appearance-none leading-tight"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text  text-black">Password</span>
          </label>
          <input
            type="password"
            placeholder="password"
            className="input input-bordered bg-slate-100 text-gray-700 focus:border-2 focus:border-slate-400 appearance-none leading-tight"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label className="label">
            <a
              href="#"
              className="label-text-alt link link-hover font-bold  text-[#00A96E] "
            >
              Forgot password?
            </a>
          </label>
        </div>
        <div className="form-control mt-3">
          <button
            type="submit"
            className="btn btn-primary font-bold bg-[#00A96E] hover:bg-[#2e7b60]  text-white"
          >
            Login
          </button>
          <label className="label">
            <h1 className="text-black">
              Don't have account?
              <a
                href="/register"
                className=" link link-hover font-bold  text-[#00A96E] "
              >
                Register
              </a>
            </h1>
          </label>
        </div>
      </form>
    </>
  );
};

export default Form;
