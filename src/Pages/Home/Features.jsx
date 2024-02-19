import search from "../../assets/search.svg" 
import select from "../../assets/select.svg" 
import pay from "../../assets/pay.svg" 
const Features = () => {
    return (
        <div className="flex justify-center items-center gap-5 max-w-6xl mx-auto mb-10">
            <div className="flex-1">
                <div className="flex justify-center items-center">
                    <img src={search} alt="" className="" />
                </div>
                <div className="w-52 mx-auto mt-3 space-y-2">
                    <h3 className="font-semibold text-3xl">
                    Search

                    </h3>
                    <p className="text-xs">
                        Choose your origin, destination, journey dates and search for trains
                    </p>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex justify-center items-center">
                    <img src={select} alt="" className="" />
                </div>
                <div className="w-52 mx-auto mt-3 space-y-2">
                    <h3 className="font-semibold text-3xl">
                    Select

                    </h3>
                    <p className="text-xs">
                    Select your desired trip and choose your seats
                    </p>
                </div>
            </div>
            <div className="flex-1">
                <div className="flex justify-center items-center">
                    <img src={pay} alt="" className="" />
                </div>
                <div className="w-52 mx-auto mt-3 space-y-2">
                    <h3 className="font-semibold text-3xl">
                    Pay

                    </h3>
                    <p className="text-xs">
                    Pay for the tickets via Debit / Credit Cards or MFS
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Features;