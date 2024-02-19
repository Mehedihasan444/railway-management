import { Outlet } from "react-router-dom";
import Form from "./Form";
import Features from "./Features";

const Home = () => {
  return (
    <>
      {/* banner section */}
      <div className="max-w-6xl mx-auto  lg:flex justify-between items-center gap-5 h-screen">
        <div className="flex-1">
          <Form />
        </div>

        <div className="flex-1">
          <img
            src="https://bangladesh-railway.s3-ap-southeast-1.amazonaws.com/production/content-media/BDRAILWAY_TICKET2f9ee800e712f9d0a5ead5b7500dbdfa.png"
            alt="train-photo"
            className="rounded-md w-full"
          />
        </div>
      </div>
      {/* <Outlet></Outlet> */}
      <Features />
      {/*  */}
    </>
  );
};

export default Home;
