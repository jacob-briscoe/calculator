import styled from "styled-components";
import { Display, Header, Keypad } from "../components";

const StyledCalculator = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  height: 100%;
`;

export function Calculator() {
  return (
    <>
      <StyledCalculator>
        <Header />
        <Display />
        <Keypad />
      </StyledCalculator>
    </>
  );
}
