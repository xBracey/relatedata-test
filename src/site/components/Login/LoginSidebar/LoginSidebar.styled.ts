import styled from "styled-components";
import { colours } from "theme";

export const LoginSidebarContainer = styled.div`
  width: 30%;
  background-color: ${colours.yellow200};
  padding: 50px;
  min-height: calc(100vh - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoContainer = styled.div`
  margin-bottom: 0px;
`;

export const PredictorText = styled.h2`
  margin: 10px;
  text-align: center;
`;

export const SidebarInfoContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const SidebarInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;

  svg {
    min-height: 50px;
    min-width: 50px;
  }
`;

export const SidebarInfoText = styled.p`
  margin: 0 0 0 20px;
`;

export const SidebarMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

export const SidebarMenu = styled.p`
  margin: 0 auto;
  text-decoration: underline;
  cursor: pointer;
  color: ${colours.black};
`;