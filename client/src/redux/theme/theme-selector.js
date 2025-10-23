import { createSelector } from "reselect";

const selectTheme = (state) => state.color;

export const selectThemeColor = createSelector(
  [selectTheme],
  (backgroundTheme) => backgroundTheme.theme
);
