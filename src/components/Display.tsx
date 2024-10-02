import styled from "styled-components";

const StyledDisplay = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.screen};
  color: ${({ theme }) => theme.text.veryLight};
  font-size: 2.4rem;
  font-weight: 600;
  padding: 1.75rem;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
`;

export function Display() {
  return <StyledDisplay>399,981</StyledDisplay>;
}
