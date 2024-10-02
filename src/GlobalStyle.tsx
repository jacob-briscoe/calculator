import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  :root {
    --white: hsl(0, 0%, 100%);
    --light-gray: hsl(0, 0%, 90%);
    --very-light-gray: hsl(0, 0%, 93%);
    --grayish-red: hsl(0, 5%, 81%);
    --light-grayish-orange: hsl(30, 25%, 89%);
    --grayish-orange: hsl(28, 16%, 65%);
    --light-grayish-yellow: hsl(45, 7%, 89%);
    --dark-grayish-orange: hsl(35, 11%, 61%);
    --very-dark-grayish-yellow: hsl(60, 10%, 19%);
    --very-dark-grayish-blue: hsl(221, 14%, 31%);
    --desaturated-dark-blue: hsl(225, 21%, 49%);
    --darker-desaturated-dark-blue: hsl(224, 28%, 35%);
    --very-dark-desaturated-blue: hsl(222, 26%, 31%);
    --lighter-very-dark-desaturated-blue: hsl(223, 31%, 20%);
    --light-very-dark-desaturated-blue: hsl(224, 36%, 15%);
    --very-dark-blue: hsl(198, 20%, 13%);
    --dark-moderate-cyan: hsl(185, 42%, 37%);
    --very-dark-cyan: hsl(185, 58%, 25%);
    --pure-cyan-key-bg-toggle: hsl(176, 100%, 44%);
    --soft-cyan-key-shadow: hsl(177, 92%, 70%);
    --red: hsl(6, 63%, 50%);
    --dark-red: hsl(6, 70%, 34%);
    --orange: hsl(25, 98%, 40%);
    --dark-orange: hsl(25, 99%, 27%);
    --light-yellow: hsl(52, 100%, 62%);
    --very-dark-violet: hsl(268, 75%, 9%);
    --darker-very-dark-violet: hsl(268, 71%, 12%);
    --lighter-very-dark-violet: hsl(268, 47%, 21%);
    --dark-violet: hsl(281, 89%, 26%);
    --vivid-magenta: hsl(285, 91%, 52%);
    --dark-magenta: hsl(290, 70%, 36%);
  }

  @font-face {
    font-family: "League Spartan";
    font-stretch: 75% 125%;
    font-style: normal;
    font-weight: 100 900;
    src: url("LeagueSpartan-VariableFont_wght.ttf") format("truetype");
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme: { backgrounds } }) => backgrounds.main};
    font-family: "League Spartan", sans-serif;
    font-size: var(--font-size-large);
    padding: 1.5rem;
    box-sizing: border-box;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 1024px) {
    body {
      padding: unset;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    #root {
      min-width: 375px;
      max-width: 493px;
      max-height: 650px;
    }
  }
`;

export default GlobalStyle;
