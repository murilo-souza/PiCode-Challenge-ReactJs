import styled from "styled-components";
import { theme } from "../../global/theme/theme";

export const Container = styled.nav`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    padding: 15px 170px 10px 70px;
    background-color: ${theme.colors.background};
    border-bottom: 1.5px solid ${theme.colors.stroke};

    img {
        width: 300px;
    } 

    div{
        .NavLink{
            text-decoration: none;
            margin-left: 75px;
            font-size: 25px;
            color: ${theme.colors.text}

        }
    }
`
