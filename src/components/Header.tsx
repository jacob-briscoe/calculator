import styled from "styled-components";
import { ThemeToggle } from "./ThemeToggle";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const StyledAppName = styled.h1`
  font-size: 1.85rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text.appName};
`;

export function Header() {
  return (
    <StyledHeader>
      <StyledAppName>calc</StyledAppName>
      <ThemeToggle />
    </StyledHeader>
  );
}
