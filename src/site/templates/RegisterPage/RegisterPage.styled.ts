import {
  ButtonContainer,
  ButtonOuterContainer,
} from "components/Button/Button.styled";
import styled from "styled-components";
import { colours } from "theme";

export const RegisterPageContainer = styled.div`
  display: flex;
`;

export const RegisterCardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colours.green200};

  ${ButtonOuterContainer} {
    padding: 16px;

    ${ButtonContainer} {
      padding: 12px 36px;
    }
  }
`;
