//1 create redux redux toolkit

import { configureStore } from "@reduxjs/toolkit";
import { ApiService } from "./service/ApiService";
export const store = configureStore({
  reducer: {
    [ApiService.reducerPath]: ApiService.reducer,
  },
  //we need middleware to run async process
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ApiService.middleware),
});
