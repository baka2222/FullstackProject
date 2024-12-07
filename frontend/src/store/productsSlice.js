import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fulfillProducts = createAsyncThunk(
    'products/fulfillProducts',
    async () => {
        const request = await fetch('http://127.0.0.1:8000/store/', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer 886dfca4cadd779846fc38d67034aee47e55f536`,
            },
        })
        return await request.json()
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [],
        loading: false,
        error: false,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fulfillProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fulfillProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fulfillProducts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    }
})

export const productsReducer = productsSlice.reducer;