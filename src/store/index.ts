import {configureStore} from '@reduxjs/toolkit';
import {productSlice} from './slice/productSlice';
import {categoriesSlice} from './slice/categoriesSlice';
import {cartSlice} from './slice/cartSlice';
import {authSlice} from './slice/authSlice';
import {favoriteSlice} from './slice/favoriteSlice';
import {userSlice} from './slice/userSlice';
import {searchSlice} from './slice/searchSlice';

export const store = configureStore({
  reducer: {
    productsStr: productSlice.reducer,
    categoriesStr: categoriesSlice.reducer,
    cartStr: cartSlice.reducer,
    authStr: authSlice.reducer,
    favoritesStr: favoriteSlice.reducer,
    userStr: userSlice.reducer,
    searchStr: searchSlice.reducer,
  },
  middleware: getDefauldMiddleware =>
    getDefauldMiddleware({
      serializableCheck: false, // Bu, Redux Toolkit'ın sakladığı state'lerin sıradan bir şekilde kaydedilmesini sağlar.
    }),
});

// RootState Tipi: store.getState fonksiyonunun dönüş tipini otomatik olarak çıkarır.Yani, state nesnesinin tipini belirler.
export type RootState = ReturnType<typeof store.getState>;
//AppDispatch Tipi:  dispatch fonksiyonunun tipini otomatik çıkarır.Thunk veya async işlemler için kullanılır.
export type AppDispatch = typeof store.dispatch;
