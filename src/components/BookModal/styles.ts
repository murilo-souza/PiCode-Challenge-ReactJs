import styled from "styled-components";
import { theme } from "../../global/theme/theme";

export const Container = styled.form`
  h1 {
    color: ${theme.colors.text};
    margin-bottom: 30px;
  }

  label {
    color: ${theme.colors.text};
  }

  input {
    width: 100%;
    padding: 0 24px;
    height: 60px;
    border-radius: 10px;
    border: 2px solid ${theme.colors.stroke};
    margin-bottom: 15px;
  }

  button {
    width: 100%;
    padding: 0 24px;
    height: 60px;
    border-radius: 10px;
    border: none;
    background-color: ${theme.colors.stroke};
    color: ${theme.colors.text};
    cursor: pointer;
    font-size: 25px;

    :hover {
      filter: brightness(0.8);
      transition: all 0.5s ease-out;
    }
  }
`;
