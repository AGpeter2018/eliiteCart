import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

// import rootReducer from "./root-reducer";
import persistReducer from "./root-reducer";

const middleware = [logger];

export const store = createStore(
  persistReducer,
  applyMiddleware(thunk, ...middleware)
);

export const persistor = persistStore(store);
