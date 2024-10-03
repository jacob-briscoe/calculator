import { useMemo, useState, type ComponentPropsWithRef } from "react";
import styled from "styled-components";

const StyledRange = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 70px;
  height: 28px;
  background: ${({ theme }) => theme.backgrounds.toggleKeypad};
  border-radius: 14px;
  outline: none;
  padding-left: 5px;
  padding-right: 5px;
  box-sizing: border-box;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    background: ${({ theme }) => theme.keys.backgroundToggle};
    border-radius: 50%;

    &:hover {
      filter: brightness(1.4);
    }
  }

  &::-moz-range-thumb {
    width: 18px;
    height: 18px;
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
  color: ${({ theme }) => theme.text.light};
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 600;
`;

const StyledSwitchToggleTickLabel = styled.label`
  cursor: pointer;
  color: ${({ theme }) => theme.text.light};
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
  grid-template-rows: repeat(2, 1fr);
  column-gap: 1.5rem;
`;

type ThemeToggleProps = ComponentPropsWithRef<"div"> & {
  themeCount?: number;
};

export function ThemeToggle({ themeCount = 3 }: ThemeToggleProps) {
  const [selectedTheme, setSelectedTheme] = useState(1);

  const themeOptions = useMemo(
    () =>
      new Array(themeCount).fill(1).map((firstTheme, index) => {
        const themeID = firstTheme + index;
        return (
          <li key={themeID}>
            <StyledSwitchToggleTickLabel
              htmlFor="theme"
              onClick={() => setSelectedTheme(themeID)}
            >
              {themeID}
            </StyledSwitchToggleTickLabel>
          </li>
        );
      }),
    [themeCount],
  );

  return (
    <StyledThemeToggle>
      <StyledSwitchToggleTickList>{themeOptions}</StyledSwitchToggleTickList>
      <StyledThemeToggleLabel>theme</StyledThemeToggleLabel>
      <StyledRange
        id="theme"
        type="range"
        min="1"
        max={themeCount}
        value={selectedTheme}
        onChange={(evt) => setSelectedTheme(evt.target.valueAsNumber)}
      />
    </StyledThemeToggle>
  );
}
