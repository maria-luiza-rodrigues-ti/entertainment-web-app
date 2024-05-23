import { Outlet } from "react-router-dom";
import LogoTipo from "/assets/logo.svg";
import { HomeIcon, LoginContainer } from "./styles";

export function LoginLayout() {
  return (
    <LoginContainer>
      <HomeIcon src={LogoTipo} alt="" />
      <Outlet />
    </LoginContainer>
  );
}
