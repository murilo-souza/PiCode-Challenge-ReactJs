import styled from "styled-components";
import { theme } from "../../global/theme/theme";

export const Container = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 120px;
`;

export const Title = styled.h1`
  color: ${theme.colors.text};
`;

export const Description = styled.strong`
  color: ${theme.colors.stroke};
`;
