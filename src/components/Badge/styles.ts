import styled from 'styled-components'
import { theme } from '../../global/theme/theme';

export const Container = styled.div`
    margin-right: 10px;
    border: 1px solid ${theme.colors.stroke};
    border-radius: 5px;
    padding: 5px;
    background-color: ${theme.colors.background_card};

    p{
        color: ${theme.colors.text};
        font-weight: 100;
        
    }
`;