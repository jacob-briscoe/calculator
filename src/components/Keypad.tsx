import styled from "styled-components";
import { Button } from "./Button";
import type { PropsWithChildren } from "react";

const StyledKeypad = styled.fieldset`
  display: grid;
  grid-template-columns: repeat(4, 60px);
  grid-auto-rows: minmax(60px, auto);

  column-gap: 0.8rem;
  row-gap: 1rem;

  background-color: ${({ theme }) => theme.backgrounds.toggleKeypad};
  padding: 1.5rem;
  border-radius: 10px;
  height: 100%;

  @media (min-width: 376px) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(60px, auto);

    column-gap: 1.5rem;
    row-gap: 1.5rem;
  }
`;

const LastRowButton = styled(Button)`
  grid-column: span 2;
`;

type KeypadProps = PropsWithChildren & {
  onInputKey: (key: string) => void;
  onDeleteKey: () => void;
  onResetKey: () => void;
  onCalculateKey: () => void;
};

export function Keypad({
  onCalculateKey,
  onDeleteKey,
  onInputKey,
  onResetKey,
}: KeypadProps) {
  return (
    <StyledKeypad>
      <Button onClick={() => onInputKey("7")}>7</Button>
      <Button onClick={() => onInputKey("8")}>8</Button>
      <Button onClick={() => onInputKey("9")}>9</Button>
      <Button onClick={() => onDeleteKey()} functionButton>
        del
      </Button>
      <Button onClick={() => onInputKey("4")}>4</Button>
      <Button onClick={() => onInputKey("5")}>5</Button>
      <Button onClick={() => onInputKey("6")}>6</Button>
      <Button onClick={() => onInputKey("+")}>+</Button>
      <Button onClick={() => onInputKey("1")}>1</Button>
      <Button onClick={() => onInputKey("2")}>2</Button>
      <Button onClick={() => onInputKey("3")}>3</Button>
      <Button onClick={() => onInputKey("-")}>-</Button>
      <Button onClick={() => onInputKey(".")}>.</Button>
      <Button onClick={() => onInputKey("0")}>0</Button>
      <Button onClick={() => onInputKey("/")}>/</Button>
      <Button onClick={() => onInputKey("*")}>x</Button>
      <LastRowButton onClick={() => onResetKey()} functionButton>
        reset
      </LastRowButton>
      <LastRowButton onClick={() => onCalculateKey()} equalsButton>
        =
      </LastRowButton>
    </StyledKeypad>
  );
}
