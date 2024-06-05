import { NavLink } from "react-router-dom";
import armband from "../assets/armband.svg";
import forside from "../assets/forside.svg";
import profil from "../assets/profil.svg";
import kort from "../assets/kort.svg";

function Nav() {

    return (
      <nav>
        <NavLink className={({ isActive }) => isActive? "active Navbar": 'Navbar'} to="/">
          <img src={forside} alt="Forside" />
          Forside
        </NavLink>
        <NavLink className={({ isActive }) => isActive? "active Navbar": 'Navbar'} to="/kort"><img src={kort}  alt="Kort" />Kort</NavLink>
        <NavLink className={({ isActive }) => isActive? "active Navbar": 'Navbar'} to="/armband"><img src={armband}  alt="Armbånd" />Armbånd</NavLink>
        <NavLink className={({ isActive }) => isActive? "active Navbar": 'Navbar'} to="/profil"><img src={profil}  alt="Profil" />Profil</NavLink>
      </nav>
    )
  }
  
  export default Nav
  