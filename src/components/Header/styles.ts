import styled from "styled-components";
import { theme } from "../../global/theme/theme";

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    div{
        display: flex;
        align-items: center;
    }

    div > input {
        border-radius: 5px 0 0 5px;
        border: 1px solid ${theme.colors.stroke};
        height: 40px;
    }

    div > button {
        height: 40px;
        border-radius: 0 5px 5px 0;
        display: flex;
        background-color: ${theme.colors.stroke};
        border: none;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        :hover{
            filter: brightness(0.8);
            transition: all 0.5s ease-out;
        }
    }
    

`