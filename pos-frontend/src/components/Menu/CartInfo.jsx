import React, { useRef,useEffect } from 'react'
import { RiDeleteBin2Fill } from 'react-icons/ri'
import { FaNotesMedical } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../../Redux/Slices/CartSlice'

const CartInfo = () => {

  const cartData=useSelector((state)=>state.cart);
  const dispatch=useDispatch();
  const scrollRef=useRef();

   useEffect(() => {
    if(scrollRef.current){
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight, behavior:"smooth"
      })
    }
  },[cartData]);
  const handleRemove=(itemId)=>{
    dispatch(removeItem(itemId));
  }

  return (
     <div className='px-4 py-2'>
        <h1 className='text-lg text-[#e4e4e4] font-semibold tracking-wide'>Order details</h1>
        <div className='mt-4 overflow-y-scroll scrollbar-hide h-[380px]'ref={scrollRef}>
         {cartData.length===0? (
          <p className='text-[#ababab] text-sm flex justify-center items-center h-[380px]' >Your cart is empty. start adding items!</p>
         ):cartData.map((item)=>{
          return(
               <div className='bg-[#1f1f1f] px-4 py-4 rounded-lg mb-2' >
                <div className='flex items-center justify-between'>
                    <h1 className='text-[#ababab] font-semibold tracking-wide text-sm'>{item.name}</h1>
                    <p className='text-[#ababab] font-semibold'> x{item.quantity}</p>
                </div>
                <div className=' flex items-center justify-between mt-3'>
                    <div className='flex items-center gap-3'>
                      <RiDeleteBin2Fill onClick={()=>handleRemove(item.id)} className='text-red-900 cursor-pointer' size={20}/>
                      <FaNotesMedical className='text-[#ababab] cursor-pointer' size={17}/>
                    </div>
                    <p className='text-[#f5f5f5] text-sm font-semibold'>{item.price} FCFA</p>
                  </div>
            </div>
         )
        })}
        
        </div>

    </div>
  )
}

export default CartInfo


