import React, { useState }  from "react";
import BottomNav from "../components/shared/BottomNav";
import OrderCard from "../components/Orders/OrderCard";
import BackButton from "../components/shared/BackButton";

const Orders=()=>{
    const [status,setStatus]=useState("all");
    return (
       <section className="bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden">
        <div className="flex items-center justify-between px-8 py-4">
            <div className="flex items-center gap-4">
                <BackButton/>
                <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">Orders</h1>
            </div>
            <div className="flex items-center justify-around gap-4">
                <button onClick={()=> setStatus("all")} className={`text-[#ababab] ${status==="all" && "bg-[#383838]"} text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer`}>All</button>
                <button onClick={()=> setStatus("progress")} className={`text-[#ababab] ${status==="progress" && "bg-[#383838]"} text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer`}>In Progress</button>
                <button onClick={()=> setStatus("ready")} className={`text-[#ababab] ${status==="ready" && "bg-[#383838]"} text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer`}>Ready</button>
                <button onClick={()=> setStatus("completed")} className={`text-[#ababab] ${status==="completed" && "bg-[#383838]"} text-lg rounded-lg px-5 py-2 font-semibold cursor-pointer`}>Completed</button>
            </div>
            
        </div>
        <div className="flex flex-wrap gap-5 px-10 py-4 h-[calc(100vh-5rem-8rem)] overflow-y-scroll">
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
            <OrderCard/>
         </div>
        <BottomNav/>
       </section>
    )
}
export default Orders