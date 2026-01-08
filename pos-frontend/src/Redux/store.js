import {configureStore} from '@reduxjs/toolkit'
import customerSlice from './Slices/CustomerSlice'
import cartSlice from './Slices/CartSlice'

const store = configureStore({
    reducer:{
        customer:customerSlice,
        cart:cartSlice
    },

    devTools: import.meta.env.NODE_ENV !=="production",
});

export default store;