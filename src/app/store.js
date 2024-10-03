import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { authApi } from './services/AuthApi';
import { productsApi } from './services/ProductsApi'; // Ensure the path is correct
import authReducer from './slices/authSlice';
import cartReducer from './slices/cartSlice';
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        auth:authReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [authApi.reducerPath]: authApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(productsApi.middleware),
});

setupListeners(store.dispatch);
