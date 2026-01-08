import React, { useState } from 'react'
import { FaHome } from 'react-icons/fa'
import {MdOutlineReorder} from 'react-icons/md'
import {MdTableBar} from 'react-icons/md'
import {CiCircleMore} from 'react-icons/ci'
import {BiSolidDish} from 'react-icons/bi'
import {useLocation, useNavigate} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import  {setCustomer} from '../../Redux/Slices/CustomerSlice'
import Modal from './Modal'

function BottomNav() {
  const navigate = useNavigate();
  const [isModalOpen,setIsModalOpen]=useState(false);
  const openModal=()=> setIsModalOpen(true);
  const closeModal=()=>setIsModalOpen(false);
  const[guestCount, setGuestCount]=useState(0);
  const location=useLocation();
  const [name, setName]=useState();
  const [phone, setPhone] = useState();
  const dispatch=useDispatch();

  const increment=()=>{
    if (guestCount>=6) return;
    setGuestCount((prev)=>prev+1)
  }
  const decrement=()=>{
    if(guestCount<=0) return;
      setGuestCount((prev)=>prev-1)
  }

  const handleCreateOrder=()=>{
    //send data to the store
    dispatch(setCustomer({name,phone,guests:guestCount}));
    navigate('/tables');

  }

  const isActive=(path)=>location.pathname===path;

  return (

    <div className='fixed bottom-0 left-0 right-0 bg-[#262626] p-2 h-16 flex justify-around' >
      <button onClick={()=> navigate("/")} className={`${isActive('/')?"text-[#f5f5f5] bg-[#343434]":"text-[#ababab]"} flex justify-center items-center w-[200px] rounded-[20px] cursor-pointer`}><FaHome className="inline mr-2 "size={25} />Home</button>
      <button onClick={()=> navigate("/orders")} className={`${isActive('/orders')?"text-[#f5f5f5] bg-[#343434]":"text-[#ababab]"} flex justify-center items-center w-[200px] rounded-[20px] cursor-pointer`}><MdOutlineReorder className="inline mr-2 "size={25} />Orders</button>
      <button onClick={()=>navigate("/tables")}className={`${isActive('/tables')?"text-[#f5f5f5] bg-[#343434]":"text-[#ababab]"} flex justify-center items-center w-[200px] rounded-[20px] cursor-pointer`}><MdTableBar className="inline mr-2 " size={25}/>Tables</button>
      <button className='text-[#ababab] flex justify-center items-center w-[200px] rounded-[20px] cursor-pointer'><CiCircleMore className="inline mr-2 "size={25} />More</button>

      <button disabled={isActive('/tables')|| isActive('/menu')} onClick={openModal} className={`${(isActive('/tables')|| isActive('/menu'))? "bg-gray-700":"bg-[#F6B100]"} absolute bottom-6  text-[#f5f5f5] rounded-full p-3 items-center cursor-pointer`}><BiSolidDish size={30}/></button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div>
          <label className='block text-[#ababab] mb-2 text-sm font-medium'>Customer Name</label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
            <input value={name} onChange={(e)=>setName(e.target.value)} type="text" name='' placeholder='Enter customer name' id='' className='bg-transparent flex-1 text-white focus:outline-none' />
          </div>
        </div>
        <div>
          <label className='block text-[#ababab] mb-2 mt-3 text-sm font-medium'>Customer Phone</label>
          <div className='flex items-center rounded-lg p-3 px-4 bg-[#1f1f1f]'>
            <input value={phone} onChange={(e)=>setPhone(e.target.value)} type="number" name='' placeholder='(+237)-999999999' id='' className='bg-transparent flex-1 text-white focus:outline-none' />
          </div>
        </div>
        <div>
          <label className='block text-[#ababab] mb-2 text-sm font-medium'>Guest</label>
          <div className='flex items-center justify-between bg-[#1f1f1f] px-4 py-3 rounded-lg'>
            <button onClick={decrement} className='text-yellow-500 text-2xl cursor-pointer'>&minus;</button>
            <span className='text-white'>{guestCount} Person(s)</span>
            <button onClick={increment} className='text-yellow-500 text-2xl cursor-pointer'>&#43;</button>
          </div>
        </div>
        <div>
          <button onClick={()=>handleCreateOrder()} className=' bg-[#F6B100] w-full cursor-pointer text-[#f5f5f5] rounded-lg py-3 mt-8 hover:bg-yellow-700'>Create Order</button>
        </div>

      </Modal>
    </div>
  )
}

export default BottomNav
