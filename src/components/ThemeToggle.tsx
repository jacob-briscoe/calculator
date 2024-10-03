import { useMemo } from "react";
import styled from "styled-components";
import { useAppTheme } from "../hooks";

const StyledRange = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 70px;
  height: 24px;
  background: ${({ theme }) => theme.backgrounds.toggleKeypad};
  border-radius: 12px;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  box-sizing: border-box;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.keys.backgroundToggle};
    border-radius: 50%;

    &:hover {
      filter: brightness(1.4);
    }
  }

  &::-moz-range-thumb {
    width: 15px;
    height: 15px;
    background: ${({ theme }) => theme.keys.backgroundToggle};
    border-radius: 50%;
    border: none;

    &:hover {
      filter: brightness(1.4);
    }
  }
`;

const StyledThemeToggleLabel = styled.h2`
  justify-self: flex-end;
  align-self: center;
  color: ${({ theme }) => theme.text.themeToggle};
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
`;

const StyledSwitchToggleTickLabel = styled.label`
  cursor: pointer;
  color: ${({ theme }) => theme.text.themeToggle};
  font-size: 0.85rem;
  font-weight: 600;
  padding-left: 9px;
  padding-right: 9px;
`;

const StyledSwitchToggleTickList = styled.ul`
  grid-column: 2;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70px;
`;

const StyledThemeToggle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto 1fr;
  column-gap: 1.5rem;
`;

export function ThemeToggle() {
  const { changeTheme, theme, themeOptions: selectableThemes } = useAppTheme();

  const themeOptions = useMemo(
    () =>
      selectableThemes.map((themeID) => (
        <li key={themeID}>
          <StyledSwitchToggleTickLabel
            htmlFor="theme"
            onClick={() => changeTheme(themeID)}
          >
            {themeID}
          </StyledSwitchToggleTickLabel>
        </li>
      )),
    [selectableThemes, changeTheme],
  );

  return (
    <StyledThemeToggle>
      <StyledSwitchToggleTickList>{themeOptions}</StyledSwitchToggleTickList>
      <StyledThemeToggleLabel>theme</StyledThemeToggleLabel>
      <StyledRange
        id="theme"
        type="range"
        min="1"
        max={selectableThemes.length}
        value={theme.id}
        onChange={({ target }) => changeTheme(target.valueAsNumber)}
      />
    </StyledThemeToggle>
  );
}
