import { themeActionType } from "./theme-action.type";
const INITIAL_STATE = {
  theme: "light",
};

const themeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case themeActionType.THEME_CHANGE:
      return {
        ...state,
        theme: state.theme === "light" ? "dark" : "light",
      };
    default:
      return state;
  }
};

export default themeReducer;
