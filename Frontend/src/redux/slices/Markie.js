import { createSlice } from "@reduxjs/toolkit";

export const Markie = createSlice({
    name: "markie",
    initialState: {
        isMarkieHovered: false,
        showMarkie: true,
    },
    reducers: {
        setIsMarkieHovered: (state, action) => {
            state.ishovered = action.payload;
        },
        setShowMarkie: (state, action) => {
            state.showMarkie = action.payload;
        },
    },
});

export const { setIsMarkieHovered, setShowMarkie } = Markie.actions;
export default Markie.reducer;