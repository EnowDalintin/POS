import React  from "react";
import BottomNav from "../components/shared/BottomNav";
import Greetings from "../components/Home/Greetings";
import {BsCashCoin} from "react-icons/bs"
import {GrInProgress} from "react-icons/gr"
import MiniCard from "../components/Home/MiniCard";
import RecentOrders from "../components/Home/RecentOrders";
import PopularDishes from "../components/Home/PopularDishes";


const Home =()=>{
    return (
        <section className="bg-[#1f1f1f] h-[calc(100vh-8rem)] overflow-hidden flex gap-3"> 
        {/* Left div */}
            <div className="flex-3 bg-[#1f1f1f] overflow-auto  ">
                <Greetings />
                <div className="flex items-center w-full gap-3 px-8 mt-8">
                    <MiniCard title="Total Earnings" icon={<BsCashCoin />} number={61500} footerNum={1.6}/>
                    <MiniCard title="In Progress" icon={<GrInProgress />} number={16} footerNum={3.6}/>
                </div>
                <RecentOrders />
            </div>
        {/* Right div */}
            <div className="flex-2 bg-[#1f1f1f] overflow-auto ">
                <PopularDishes />
            </div>

     <BottomNav />
        </section>
    )
}
export default Home