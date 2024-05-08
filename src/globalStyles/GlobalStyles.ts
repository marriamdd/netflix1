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

::-webkit-scrollbar {
    width: 7px; 
}
::-webkit-scrollbar-thumb {
    background-color:  #333333; 
    border-radius: 6px; 
}
::-webkit-scrollbar-track{
    background-color: black;
}
html{

 font-size: 62.5%;
background-color: #222222;
    display: flex;
   justify-content: center;
   align-items:  center;
   padding: 8rem 0;
}

body{

    color: white;
    background-color: black;
    width: 375px;
height: 600px;
border-radius: 30px;
border-bottom-left-radius:0px;
border-bottom-right-radius:0px;
overflow-y: auto;

}

`;
export default GlobalStyles;
