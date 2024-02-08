import { useRef, useState } from "react";
import "./style.css";
const Form = ({setData}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const gender = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {
      email: email,
      password: password,
      name: name,
      birthDate: birthDate,
      gender: gender.current.value,
    };
    setData(info);
    // console.log(info);
  };

  return (
    <>
      <form
        className="w-full max-w-sm md:max-w-md mx-auto mt-20 bg-[#acc9d6d3] rounded-md p-7"
        onSubmit={handleSubmit}
      >
        <div className="space-y-1 -mx-3 mb-6">
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text  text-black">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="w-full  px-3 mb-6 md:mb-0">
            <label className="label">
              <span className="label-text  text-black">Email</span>
            </label>
            <input
              type="email"
              placeholder="Email address"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="w-full  px-3">
            <label className="label">
              <span className="label-text  text-black">Password</span>
            </label>
            <input
              type="password"
              placeholder="Password"
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex justify-between items-center ">
            <div className="w-full  px-3">
              <label className="label">
                <span className="label-text  text-black">Birth Date</span>
              </label>
              <input
                type="date"
                placeholder="Birth date"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                value={birthDate}
                onChange={(e) => setBirthDate(e.target.value)}
              />
            </div>
            <div className="w-full  px-3">
              <label className="label">
                <span className="label-text  text-black">Gender</span>
              </label>
              <select
                className="select select-bordered appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                ref={gender}
              >
                <option disabled selected>
                  Choose Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <button
            className="bg-[#00A96E] hover:bg-[#3e8f73] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Register
          </button>
          <label className="label">
            <h1 className="text-black">
              Already have an account?
              <a
                href="/login"
                className=" link link-hover font-bold  text-[#00A96E] "
              >
                Login
              </a>
            </h1>
          </label>
        </div>
      </form>
    </>
  );
};

export default Form;
