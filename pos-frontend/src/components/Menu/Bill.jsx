import React from 'react'
import { useSelector } from 'react-redux'
import { getTotalPrice } from '../../Redux/Slices/CartSlice';

const Bill = () => {

  const cartData=useSelector(state=>state.cart);
  const total =useSelector(getTotalPrice);
  const taxRate=5.25;
  const tax =(total*taxRate)/100;
  const totalPriceWithTax=total+tax;

  return (
    <>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs text-[#ababab] font-medium mt-2'>Items({cartData.length})</p>
      </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs text-[#ababab] font-medium mt-2'>Subtotal</p>
        <h1 className='text-[#f5f5f5] text-sm font-bold'>{total.toFixed(2)} FCFA</h1>
      </div>
     <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs text-[#ababab] font-medium mt-2'>Tax(5.25%)</p>
        <h1 className='text-[#f5f5f5] text-sm font-bold'>{tax.toFixed(2)} FCFA</h1>
     </div>
      <div className='flex items-center justify-between px-5 mt-2'>
        <p className='text-xs text-[#ababab] font-medium mt-2'>Grand Total</p>
        <h1 className='text-[#f5f5f5] text-sm font-bold'>{totalPriceWithTax.toFixed(2)} FCFA</h1>
     </div>
     <div className='flex items-center gap-3 px-5 mt-4'>
        <button className='bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold cursor-pointer'>Cash</button>
        <button className='bg-[#1f1f1f] px-4 py-3 w-full rounded-lg text-[#ababab] font-semibold cursor-pointer'>Online</button>
     </div>
     <div className='flex items-center gap-3 px-5 mt-4'>
        <button className='bg-[#025cca] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold cursor-pointer'>Print Receipt</button>
        <button className='bg-[#fcb100] px-4 py-3 w-full rounded-lg text-[#1f1f1f] font-semibold cursor-pointer'>Place Order</button>
     </div>
    </>
  )
}

export default Bill
