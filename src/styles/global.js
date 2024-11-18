import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({theme})=> theme.COLORS.BACKGROUND_900};
        color: ${({theme})=> theme.COLORS.WHITE};

        -webkit-font-smoothing: antialiased;
        
    }

    body, input, button, textarea {
        font-family: "Nanum Myeongjo", serif;
        font-weight: 400;
        font-style: normal;
       
}

a {
        text-decoration: none;
        color: white;
    }

    button {
        font-size: 20px;
        font-weight: bold;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover{
        cursor: pointer;
        filter: brightness (0.9);
    }

    `;