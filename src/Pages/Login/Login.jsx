import { useState } from "react";
import Form from "./Form";
// import image from "../../assets/train.svg"
const image = "https://eticket.railway.gov.bd/assets/img/login-page-bg.svg";
const Login = () => {
  const [data,setData]=useState({})

  console.log(data)
  return (
    <div
      className="h-screen  "
      style={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
        backgroundSize: "contain",
      }}
    >
        <div className="max-w-5xl w-full mx-auto">
            <div className="flex justify-center lg:justify-start  items-center h-screen">
        <Form setData={setData}/>
      </div>
        </div>
      
    </div>
  );
};

export default Login;
