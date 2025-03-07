import {ProductState} from '../../models/data/productsState';
import {createSlice} from '@reduxjs/toolkit';
import {
  getAllProducts,
  getBestSellerProducts,
  getElectronicProducts,
  getJewelryProducts,
  getPopularProducts,
  getProductsDetail,
} from '../actions/productsActions';

const initialState: ProductState = {
  products: [],
  bestSellerProducts: [],
  popularProducts: [],
  jewelry: [],
  electronics: [],
  singleProduct: {},
  pending: false,
  error: null,
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getBestSellerProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getBestSellerProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.bestSellerProducts = action.payload;
      })
      .addCase(getBestSellerProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      .addCase(getPopularProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getPopularProducts.fulfilled, (state, action) => {
        state.pending = false;
        state.popularProducts = action.payload;
      })
      .addCase(getPopularProducts.rejected, (state, action) => {
        state.pending = false;
        state.error = action.error;
      })
      .addCase(getJewelryProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getJewelryProducts.fulfilled, (state, action) => {
        (state.pending = false), (state.jewelry = action.payload);
      })
      .addCase(getJewelryProducts.rejected, (state, action) => {
        (state.pending = false), (state.error = action.error);
      })
      .addCase(getElectronicProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getElectronicProducts.fulfilled, (state, action) => {
        (state.pending = false), (state.electronics = action.payload);
      })
      .addCase(getElectronicProducts.rejected, (state, action) => {
        (state.pending = false), (state.error = action.error);
      })

      .addCase(getProductsDetail.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getProductsDetail.fulfilled, (state, action) => {
        (state.pending = false), (state.singleProduct = action.payload);
      })
      .addCase(getProductsDetail.rejected, (state, action) => {
        (state.pending = false), (state.error = action.error);
      })

      //all products
      .addCase(getAllProducts.pending, (state, action) => {
        state.pending = true;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        (state.pending = false), (state.products = action.payload);
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        (state.pending = false), (state.error = action.error);
      });
  },
});

export default productSlice.reducer;
