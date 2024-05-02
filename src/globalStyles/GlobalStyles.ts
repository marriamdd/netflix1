import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
#root{

}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family:"Outfit", sans-serif ;
    color: white;
  
}
html{

 font-size: 62.5%;
background-color: darkgrey;
    display: flex;
   justify-content: center;
   align-items:  center;
   padding: 2rem 0;

}

body{

    color: white;
    background-color: black;
    width: 375px;

}

`;
export default GlobalStyles;
