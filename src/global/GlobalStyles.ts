import {createGlobalStyle} from 'styled-components'
import { theme } from './theme/theme'

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        box-sizing: border-box;
    }
    @media (max-width:1080px) {
        html {
            font-size: 93.75%;
        }  
    }
    @media (max-width: 720px){
        html {
            font-size: 87.5%;
        }
    }
    body, input, textarea, select, button {
        font: 400 1rem "Poppins", sans-serif;
    }

    html {
        background-color: ${theme.colors.background}
    }

    .react-modal-overlay{
       background:  rgba(0, 0, 0, 0.5);
       position: fixed;
       top: 0;
       bottom: 0;
       right: 0;
       left: 0;
       display: flex;
       align-items: center;
       justify-content: center;
    }
    .react-modal-content{
        width: 100%;
        max-width: 576px;
        background: ${theme.colors.background};
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }
    .react-modal-close{
        position: absolute;
        right: 1.5rem;
        top: 1.5rem;
        border:0;
        background: transparent;
        transition: filter 0.2s;
        cursor: pointer;
        &:hover{
            filter: brightness(0.8);
        }
    }
`