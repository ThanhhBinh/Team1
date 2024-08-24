import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart")).items
            : [],
    },
    reducers: {
        addToCart: (state, action) => {
            const { item, quantity, user_id } = action.payload;
            if (!Array.isArray(state.items)) {
                state.items = []; // Initialize as an array if not already
            }

            const existingItem = state.items.find(
                (i) => i.product_id === item.product_id && i.user_id === user_id
            );

            if (existingItem) {
                state.items = state.items.map((i) => {
                    if (
                        i.product_id === item.product_id &&
                        i.user_id === user_id
                    ) {
                        return { ...i, count: i.count + quantity }; // Increase quantity
                    }
                    return i;
                });
            } else {
                state.items = [
                    ...state.items,
                    { ...item, count: quantity, user_id },
                ];
            }

            localStorage.setItem(
                "cart",
                JSON.stringify({ items: state.items })
            );
        },

        removeFromCart: (state, action) => {
            const { product_id, user_id } = action.payload;
            state.items = state.items.filter(
                (item) =>
                    item.product_id !== product_id || item.user_id !== user_id
            );

            localStorage.setItem(
                "cart",
                JSON.stringify({ items: state.items })
            );
        },

        increaseCount: (state, action) => {
            const { product_id, user_id } = action.payload;
            state.items = state.items.map((item) => {
                if (
                    item.product_id === product_id &&
                    item.user_id === user_id
                ) {
                    return { ...item, count: item.count + 1 }; // Increase quantity
                }
                return item;
            });
            localStorage.setItem(
                "cart",
                JSON.stringify({ items: state.items })
            );
        },

        decreaseCount: (state, action) => {
            const { product_id, user_id } = action.payload;
            state.items = state.items.map((item) => {
                if (
                    item.product_id === product_id &&
                    item.user_id === user_id &&
                    item.count > 1
                ) {
                    return { ...item, count: item.count - 1 }; // Decrease quantity
                }
                return item;
            });
            localStorage.setItem(
                "cart",
                JSON.stringify({ items: state.items })
            );
        },

        updateCount: (state, action) => {
            const { product_id, count, user_id } = action.payload;
            state.items = state.items.map((item) => {
                if (
                    item.product_id === product_id &&
                    item.user_id === user_id
                ) {
                    return { ...item, count: count }; // Update quantity
                }
                return item;
            });
            localStorage.setItem(
                "cart",
                JSON.stringify({ items: state.items })
            );
        },

        clearCart: (state) => {
            state.items = [];
            localStorage.setItem("cart", JSON.stringify({ items: [] }));
        },
    },
});

export const {
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    updateCount,
    clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
