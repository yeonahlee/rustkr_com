import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const LogoTypo = styled(Link)`
  color: black;
`;

const Logo = () => {
  return (
    <>
      <LogoTypo to="/" className="ff-arvo fs-2">rustkr.com</LogoTypo>
    </>
  )
}

export default Logo;