import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    :root{
        --white: #FFF8F0;
    
        --green-light: #C8DBD7;
        --green-dark: #3C5556;

        --pink-light: #F5D4C3;
        --pink-dark: #DD9999;

        --orange: #E48776;
    
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:  'Roboto';
    }
`