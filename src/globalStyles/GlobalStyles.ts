import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:"Outfit", sans-serif ;
    color: white;
}
html{

    font-size: 62.5%;
}
body{
    color: white;
    background-color: black;
}

`;
export default GlobalStyles;
