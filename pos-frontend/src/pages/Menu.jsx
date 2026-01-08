import React from 'react'
import BottomNav from '../components/shared/BottomNav'
import BackButton from '../components/shared/BackButton'
import { MdRestaurantMenu } from 'react-icons/md'
import MenuContainer from '../components/Menu/MenuContainer'
import { menus } from '../constants'
import CustomerInfo from '../components/Menu/CustomerInfo'
import CartInfo from '../components/Menu/CartInfo'
import Bill from '../components/Menu/Bill'
import { useSelector } from 'react-redux'

const Menu = () => {

  const customerData=useSelector(state=>state.customer)
  
  return (
    <section className='bg-[#1f1f1f] h-[calc(100vh-5rem)] overflow-hidden flex gap-3'>
      {/* Left div */}
         <div className="flex-3 bg-[#1f1f1f] overflow-auto  ">
            <div className='flex justify-between items-center px-10 py-4'>
                <div className="flex items-center gap-4">
                    <BackButton/>
                    <h1 className="text-[#f5f5f5] text-2xl font-bold tracking-wider">Menu</h1>
                    </div>
                    <div className='flex items-center justify-around gap-4'>
                    {/*Logged User details */}
                           <div className='flex items-center gap-4'>
                                <div className='bg-[#1f1f1f] rounded-[15px] p-3 cursor-pointer'>
                                    <MdRestaurantMenu className='text-[#f5f5f5] text-2xl'/>
                                </div>
                                <div className='flex items-center gap-3 cursor-pointer'>
                                    <div className='flex flex-col items-start'>
                                        <h1 className='text-md text-[#f5f5f5] font-semibold'>{customerData.customerName||"Unknown Customer"}</h1>
                                        <p className='text-xs text-[#ababab] font-medium' >{customerData.tableNo||"N/A"}</p>
                                    </div>
                                </div>
                           </div>
                </div>
            </div>

            <MenuContainer />
         </div>
    {/* Right div */}
        <div className="flex-1 bg-[#1a1a1a] overflow-auto mt-4 mr-3 h-[810px] rounded-lg pt-2">
             {/* Customer info */}
              <CustomerInfo />  
             <hr className='border-[#2a2a2a] border-t-2 '/>
             {/* Cart item section */}
              <CartInfo />
              <hr className='border-[#2a2a2a] border-t-2 '/>
             {/* Bill section */}
              <Bill />

        </div>
      <BottomNav/>
    </section>
  )
}

export default Menu
