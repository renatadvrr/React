import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    :root{
        --color-text: #FFFFFF;
        --color-text-in-primary: #000000;
        --color-primary: #3ec863;
        --color-secondary: #310a27;
        --color-tertiary: #102542;
        --color-border: rgba(255, 255, 255, 0.2);
        --color-success: #7cc39c;
        --color-warning: #fbea85;
        --color-error: #ea524f;
    }

    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    body, html{
        width: 100vw;
        height: 100vw;
    }

    body{
        background: linear-gradient(
            250deg, 
            var(--color-secondary) -12%, 
            var(--color-tertiary) 114%
            );
    }
    
    body, input, button, textarea{
        font-family: 'Montserrat', sans-serif;;
    }

    button{
        cursor: pointer;
    }

`;