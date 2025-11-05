import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./reducer"
import modulesReducer from "./Courses/[cid]/Modules/reducer";


const store = configureStore({
  reducer: { courseReducer,
    modulesReducer,
   },
    

});

export type RootState = ReturnType<typeof store.getState>;
export default store;
