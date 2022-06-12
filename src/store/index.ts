import { configureStore } from "@reduxjs/toolkit";
import service from "./serivce";

const store = configureStore({
  reducer: { [service.reducerPath]: service.reducer },
});

export default store;
