import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from './slice/productSlice';
import {categoriesSlice} from './slice/categoriesSlice';
import {cartSlice} from './slice/cartSlice';

export const store = configureStore({
  reducer: {
    productsStr: productSlice.reducer,
    categoriesStr: categoriesSlice.reducer,
    cartStr: cartSlice.reducer,
  },
});

// RootState Tipi: store.getState fonksiyonunun dönüş tipini otomatik olarak çıkarır.Yani, state nesnesinin tipini belirler.
export type RootState = ReturnType<typeof store.getState>;
//AppDispatch Tipi:  dispatch fonksiyonunun tipini otomatik çıkarır.Thunk veya async işlemler için kullanılır.
export type AppDispatch = typeof store.dispatch;
