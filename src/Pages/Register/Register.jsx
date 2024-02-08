import { useState } from "react";
import Form from "./Form";
const image = "https://eticket.railway.gov.bd/assets/img/login-page-bg.svg";
const Register = () => {
  const [data, setData] = useState({});
  console.log(data);
  return (
    <div
      className="h-screen "
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "right",
      }}
    >
      <div className="max-w-sm md:max-w-xl mt-10 lg:mt-0 lg:max-w-5xl mx-auto w-full h-[15vh] flex flex-col justify-end">
        <h1 className="text-4xl font-bold text-[#00A96E]">Registration</h1>
        <div className="divider divider-accent "></div>
      </div>
      <div className="h-[85vh] flex items-start justify-start w-full">
        <Form setData={setData} />
      </div>
    </div>
  );
};
export default Register;
