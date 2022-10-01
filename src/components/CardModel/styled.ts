import styled from "styled-components";
import { theme } from "../../global/theme/theme";

export const Container = styled.button`
    
    padding: 15px;
    border: 1px solid ${theme.colors.stroke};
    border-radius: 5px;
    background-color: ${theme.colors.background_card};
    cursor: pointer;
    margin: 0 15px 30px 0 ;
    //width: 100%;

    :hover{
        filter: brightness(0.8);
        transition: all 0.5s ease-out;
    }
    
    section{
        display: flex;
        flex-direction: row;
        text-align: left;
        margin-bottom: 10px;
        align-items: center;
        
        section {
            border: 1px solid ${theme.colors.stroke};
            border-radius: 10px;
            padding: 3px;
        }

        div{
            display: flex;
            flex-direction: column;
            margin-left: 10px;
            padding-bottom: 14px;
        }

        p, strong {
            color: ${theme.colors.text};
        }

        strong {
            font-size: 30px;
        }

        p{
            font-size: 14px;
        }

    }

    footer{
        display: flex;
        flex-direction: row;
        //justify-content: space-between;
    }
`