import styled from "styled-components";
import { theme } from "../../global/theme/theme";

export const Container = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;

    border: 1px solid ${theme.colors.stroke};
    border-radius: 10px;

    margin-bottom: 20px;

    div {
        display: flex;
        flex-direction: row;
        strong{
            color: ${theme.colors.text};
            font-size: 20px;
            margin-left: 10px;
        }
    } 
`