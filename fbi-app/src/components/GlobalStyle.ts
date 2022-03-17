import { createGlobalStyle } from "styled-components";

type globalStylesProps = {
    theme: {
        body: string;
        text: string;
    }
    
}

export const GlobalStyles = createGlobalStyle<globalStylesProps>`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  `;
