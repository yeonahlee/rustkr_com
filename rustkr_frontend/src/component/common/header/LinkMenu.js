import {Link} from "react-router-dom";
import styled from "styled-components";

const LinkMenuBox = styled.div``;
const LinkMenuItem = styled(Link)`
  margin-right: 1rem;
  
  font-size: 1rem;
  
  &:last-child {
    margin-right: 0;
  }
`;

const LinkMenu = () => {

  const Links = [
    { to: "/",  text: "HOME" },
    { to: "/about", text: "ABOUT"}
  ]

  return (
    <LinkMenuBox>
      {Links.map(i => {
        return (
          <LinkMenuItem to={i.to}>{i.text}</LinkMenuItem>
        )
      })}
    </LinkMenuBox>
  )
};

export default LinkMenu;