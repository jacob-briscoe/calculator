import styled from "styled-components";
import { Display, Header, Keypad } from "../components";
import { useCalculation } from "../hooks";

const StyledCalculator = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
`;

export function Calculator() {
  const { output, calculate, deleteKey, inputKey, reset } = useCalculation();

  return (
    <>
      <StyledCalculator>
        <Header />
        <Display output={output} />
        <Keypad
          onCalculateKey={calculate}
          onDeleteKey={deleteKey}
          onInputKey={inputKey}
          onResetKey={reset}
        />
      </StyledCalculator>
    </>
  );
}
