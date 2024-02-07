import Form from "./Form";

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
            src="https://bangladesh-railway.s3-ap-southeast-1.amazonaws.com/production/content-media/b66f9a625698a6728b8824899d19a771.jpg"
            alt="train-photo"
            className="rounded-md w-full"
          />
        </div>
      </div>

      {/*  */}

    </>
  );
};

export default Home;
