import { useRef } from "react";

const Form = () => {
    const selectRef = useRef(null);
    const handleSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
      const from = form.from.value;
      const to = form.to.value;
      const date = form.date.value;
  
      const data = {
        from: from,
        to: to,
        date: date,
        ChairType: selectRef.current.value,
      };
      console.log(data);
    };
    return (
        <form onSubmit={handleSubmit}>
        <div className="p-5  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">From</span>
              </div>
              <input
                type="text"
                name="from"
                placeholder="From Station"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">To</span>
              </div>
              <input
                type="text"
                name="to"
                placeholder="To Station"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Date</span>
              </div>
              <input
                type="date"
                name="date"
                placeholder="Pick a date"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          <div className="">
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text">Choose Class</span>
              </div>
              <select className="select select-bordered" ref={selectRef}>
                <option disabled selected>
                  Choose a Class
                </option>
                <option value="ac">Ac</option>
                <option value="singdha">Singdha</option>
                <option value="sovonChair">Sovon Chair</option>
              </select>
            </label>
          </div>
        </div>
        <div className="p-5">
          <button
            type="submit"
            className="btn btn-success uppercase w-full text-white"
          >
            search Trains
          </button>
        </div>
      </form>
    );
};

export default Form;