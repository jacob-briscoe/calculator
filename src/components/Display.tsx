import type { PropsWithChildren } from "react";
import styled from "styled-components";

const StyledDisplay = styled.div`
  background-color: ${({ theme }) => theme.backgrounds.screen};
  color: ${({ theme }) => theme.text.display};
  font-size: 2.4rem;
  font-weight: 600;
  padding: 1.75rem;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  @media (min-width: 768px) {
    font-size: 3rem;
    padding: 2.5rem;
  }
`;

type DisplayProps = PropsWithChildren & {
  output: string;
};

export function Display({ output }: DisplayProps) {
  return <StyledDisplay>{output}</StyledDisplay>;
}
