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
html::-webkit-scrollbar{
    width: 1.4vw;

}
html::-webkit-scrollbar-thumb{
    background-color: gray;
    border-radius: 2px;
}
html::-webkit-scrollbar-track{
background-color: black;
}
body{
    color: white;
    background-color: black;
}

`;
export default GlobalStyles;
