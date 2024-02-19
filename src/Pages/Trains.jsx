import { useParams } from "react-router-dom";


const Trains = () => {
const {from,to}=useParams()
    return (
        <div>
            <h1 className="text-xl">trains:{from}:{to}</h1>
        </div>
    );
};

export default Trains;