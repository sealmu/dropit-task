import { Link } from "react-router-dom";
import styled from "styled-components";
import routesApp from "../../contexts/navigation/routesApp";
import Cart from "../../modules/cart";
import DropitLogo from "../../tools/assets/logo-dropit-business.svg";

const NavbarLink = styled(Link)`
  display: block;
  text-decoration: none;
  cursor: pointer;
`;

const Header = () => {
  return (
    <div style={{ background: "#eee", display: "flex" }}>
      <div style={{ flex: "1" }}>
        <div>
          <NavbarLink to={routesApp.getCatalog()}>
            <img
              style={{ margin: "10px", height: "30px" }}
              src={DropitLogo}
              alt="logo"
            />
          </NavbarLink>
        </div>
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Header;
