import styled from "styled-components";
import { Button } from "./Button";

const StyledKeypad = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(4, 60px);
  grid-auto-rows: minmax(60px, auto);

  /* grid-template-columns: repeat(4, 60px);
  grid-template-rows: repeat(5, 59px); */

  /* gap: 0.8rem; */
  column-gap: 0.8rem;
  row-gap: 1rem;

  background-color: ${({ theme }) => theme.backgrounds.toggleKeypad};
  padding: 1.5rem;
  border-radius: 10px;
  height: 100%;

  @media (min-width: 375px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(60px, auto);

    /* column-gap: 1.5rem;
    row-gap: 1.5rem; */
  }
`;

const LastRowButton = styled(Button)`
  grid-column: span 2;
`;

export function Keypad() {
  return (
    <StyledKeypad>
      <Button>7</Button>
      <Button>8</Button>
      <Button>9</Button>
      <Button functionButton>del</Button>
      <Button>4</Button>
      <Button>5</Button>
      <Button>6</Button>
      <Button>+</Button>
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>
      <Button>-</Button>
      <Button>.</Button>
      <Button>0</Button>
      <Button>/</Button>
      <Button>x</Button>
      <LastRowButton functionButton>reset</LastRowButton>
      <LastRowButton equalsButton>=</LastRowButton>
    </StyledKeypad>
  );
}
