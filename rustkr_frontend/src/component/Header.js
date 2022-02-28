import {Link} from "react-router-dom";

const Header = () => {
  return (
    <>
      <Link to="/">HOME</Link>
      <Link to="/about">ABOUT</Link>
    </>
  )
}

export default Header;