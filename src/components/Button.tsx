import type { ComponentPropsWithRef } from "react";
import styled from "styled-components";

const BaseButtonStyled = styled.button`
  font-family: "League Spartan", sans-serif;
  font-size: 2rem;
  font-weight: 700;
  background-color: ${({ theme }) => theme.keys.lightBackground};
  color: ${({ theme }) => theme.text.dark};
  border-radius: 5px;
  padding: 10px;
  border: none;
  box-shadow: 0 4px 0px ${({ theme }) => theme.keys.lightShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  height: 100%;

  &:hover {
    cursor: pointer;
    filter: brightness(1.4);
  }
`;

const BaseNonNumericButton = styled(BaseButtonStyled)`
  font-size: 1.2rem;
  align-items: center;
  text-transform: uppercase;
`;

const EqualsButton = styled(BaseNonNumericButton)`
  background-color: ${({ theme }) => theme.keys.backgroundToggle};
  color: ${({ theme }) => theme.text.light};
  box-shadow: 0 4px 0px ${({ theme }) => theme.keys.darkShadow};
`;

const FunctionButton = styled(BaseNonNumericButton)`
  background-color: ${({ theme }) => theme.keys.background};
  color: ${({ theme }) => theme.text.light};
  box-shadow: 0 4px 0px ${({ theme }) => theme.keys.shadow};
`;

type ButtonProps = ComponentPropsWithRef<"button"> & {
  functionButton?: boolean;
  equalsButton?: boolean;
};

type ButtonType = typeof BaseButtonStyled | typeof BaseNonNumericButton;

export function Button({
  children,
  functionButton,
  equalsButton,
  ...rest
}: ButtonProps) {
  let Element: ButtonType = BaseButtonStyled;

  if (functionButton) {
    Element = FunctionButton;
  } else if (equalsButton) {
    Element = EqualsButton;
  }

  return <Element {...rest}>{children}</Element>;
}
