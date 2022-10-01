import styled from "styled-components";
import { theme } from "../../global/theme/theme";

export const Container = styled.main`
     display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 120px;
    h1{
        color: ${theme.colors.text}
    }

    strong {
        color: ${theme.colors.stroke}
    }
`