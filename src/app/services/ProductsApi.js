import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const token = localStorage.getItem('token');

export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://fakestoreapi.com/" }),
    endpoints: (builder) => ({
        // products
        products: builder.query({
            query: ()=> "/products/"
        }),

        singleProduct : builder.query({
            query:(id)=>`/products/${id}`
        }),
        addProduct:builder.mutation({
            query : (product)=>({
                url:'/products/',
                method:"POST",
                headers:{
                    'Authorization':`Bearer ${token} `,
                },
                body:product
            })
        }),

        // categories
        // categories:builder.query({
        //     query:()=>"products/categories"
        // }),
        // prodCateg:builder.query({
        //     query:(c)=>`/products/category/${c}`
        // })

    }),
});

export const { useProductsQuery,useCategoriesQuery,useProdCategQuery,useSingleProductQuery,useAddProductMutation } = productsApi;