import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import saleApi from "../api/sale/sale.api";
import { counterReducer } from "./slices/Counter/counter.slice";

const middlewares = [saleApi.middleware];

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        [saleApi.reducerPath]: saleApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
