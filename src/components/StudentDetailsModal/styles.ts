import styled from "styled-components";
import { theme } from "../../global/theme/theme";


export const Container = styled.div`
    header{
        display: flex;
        flex-direction: row;
        margin-bottom: 40px;
        align-items: center;
    }

    div{
        display: flex;
        flex-direction: column;
        margin-left: 10px;

        strong {
            color: ${theme.colors.text};
            font-size: 30px;
        }

        p{
            color: ${theme.colors.text}
        }
    }

    section{
        header{
            display: flex;
            justify-content: space-between;

            p, strong {
                color: ${theme.colors.text};
                font-size: 17px;
            }
        }
    }

`;