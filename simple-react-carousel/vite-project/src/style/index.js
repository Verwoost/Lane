import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    --bgColor: #141414;
    /* --componentColor: #080808; */
    --componentColor: #00000070;
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    color: #fff;
}
html {
    background-color: var(--bgColor);
    }
body {
    background-color: var(--bgColor);
    min-height: 100vh;
}
`