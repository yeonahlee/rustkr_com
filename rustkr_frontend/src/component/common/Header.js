import {Link} from "react-router-dom";
import Logo from "@component/common/header/Logo";
import LinkMenu from "@component/common/header/LinkMenu";
import styled from "styled-components";

const HeaderBox = styled.div`
  height: 100px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderBox className="container">
      <Logo />
      <LinkMenu />
    </HeaderBox>
  );
};

export default Header;