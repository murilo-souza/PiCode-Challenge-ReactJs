import styled, { css } from "styled-components";
import { theme } from "../../global/theme/theme";

interface ButtonStyleProps{
    typeButton: 'add' | 'remove' 
}

export const Container = styled.button<ButtonStyleProps>`
    border: none;
    border-radius: 5px;
    color: ${theme.colors.text};
    cursor: pointer;
    
    :hover{
        
        filter: brightness(0.8);
        transition: all 0.5s ease-out;
    }

    ${(props)=> props.typeButton === 'add' && css`
    background-color: ${theme.colors.stroke};
    `}

    ${(props)=> props.typeButton === 'remove' && css`
    background-color: ${theme.colors.remove};
    `}
`