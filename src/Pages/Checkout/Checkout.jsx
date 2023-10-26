
import banner from '../../assets/images/banner/4.jpg'
import { useLoaderData } from "react-router-dom";
import SharedNav from "../Navbar/SharedNav";

const Checkout = () => {
    const service = useLoaderData();
    const {title, price, img} = service;
    const handleBookService = event => {
        event.preventDefault();
    }
    return (
        <div>
            <SharedNav></SharedNav>
            <div className="relative bg-clip-content">
                <img className="h-72 w-full rounded-lg" src={banner} alt="" />
                <div className="">
                     <h2 className="absolute top-32 ml-20 text-3xl font-bold text-white">Check Out: {title}</h2>
                </div>
            </div>
            <form onSubmit={handleBookService}>
            <div className="space-y-5 bg-gray-200 p-20 rounded-lg mt-20">
                <div className="flex gap-5">
                    <div className="form-control w-full"> 
                        <input type="text" name="firstName" placeholder="First Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full"> 
                        <input type="text" name="lastName" placeholder="Last Name" className="input input-bordered" required />
                    </div>
                </div>

                <div className="flex gap-5">
                    <div className="form-control w-full"> 
                        <input type="text" name="yourPhone" placeholder="Your Phone" className="input input-bordered" required />
                    </div>
                    <div className="form-control w-full"> 
                        <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                    </div>
                </div>

                <div>
                <textarea placeholder="Your Message" name="message" className="textarea textarea-bordered textarea-lg h-56 w-full" ></textarea> 
                </div>

                <div>
                    <button className="btn bg-red-600 text-white w-full">
                        <h2>Order Confirm</h2>
                    </button>
                </div>
            </div>
            </form>
        </div>
    );
};

export default Checkout;