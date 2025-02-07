import { configureStore } from "@reduxjs/toolkit";
import Votes from "./slices/Votes";
import Markie from "./slices/Markie";

const store = configureStore(
    {
        reducer:{
            votes: Votes,
            markie: Markie,
        }
    }
);

export default store;