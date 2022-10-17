import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../App.css";

const PokeNavbar = () => {
  return (
    <Navbar className="navBar">
      <Navbar.Brand>
        <img src="../../assets/Pokemon-logo.png" width="100px" alt="" />
      </Navbar.Brand>

      <div className="d-flex links">
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)} to="/home">
          Home
        </NavLink>
        {" - "}
        <NavLink
          className={({ isActive }) => (isActive ? "active" : undefined)} to="/Pokemon">
          Pokemones
        </NavLink>
      </div>
    </Navbar>
  );
};
export default PokeNavbar;
