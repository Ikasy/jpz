import { NavLink } from "react-router-dom"

function Nav() {

    return (
      <nav>
        <NavLink to="/"> <img src="" alt="" />Forside</NavLink>
        <NavLink to="/kort"><img src="" alt="" />Kort</NavLink>
        <NavLink to="/armband"><img src="" alt="" />Armbånd</NavLink>
        <NavLink to="/profil"><img src="" alt="" />Profil</NavLink>
      </nav>
    )
  }
  
  export default Nav
  