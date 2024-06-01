import logo from "../assets/logomedtekst.svg";
import sobjorn from "../assets/sobjorn.svg";
import abe from "../assets/mad.svg";
import pose from "../assets/shoppingbag.svg";
import bladealle from "../assets/Bladealle.svg";
import skattejagt from "../assets/skattejagt.svg";
import Lillefirkant from "../components/Lillefirkant";
import Rektangel from "../components/Rektangel";
import { Link } from "react-router-dom";
import Shop from "./Shop";

function Forside() {

  return (
    <div style={{ backgroundImage: `url(${bladealle})`, backgroundRepeat:"no-repeat", backgroundSize:"cover", paddingBottom: "15vh", backgroundAttachment: "fixed"}}>
      <div className="logo">
        <img 
          src={logo} 
          alt="Jyllands Park Zoo logo med løve, abe, giraf og søbjørn" 
        />
      </div>
      <div className="flex">
        <Lillefirkant
          tekst="VI HAR"
          tekst2="ÅBENT"
          tekst3="10 - 17"
          farve="#FCFAEEBF"
        />
        <Lillefirkant  
          tekst="INFO"
          tekstfarve="#FCFAEE"
          farve="#002a12BF"
        />
      </div>
      <Rektangel
        tekst="DAGENS"
        tekst2="PROGRAM"
        src2={sobjorn}
        alt2="søbjørn"
        farve="#4e722c"
        br="5px 50px"
        w="40%"
      />
      <div className="flex">
        <Link to="/shop">
          <Lillefirkant 
            tekst="ENTRÉ/"
            tekst2="SHOP"
            src={pose}
            alt="Pose"
            pos="absolute"
            z="-1"
            br="100%"
            tekstfarve="#FCFAEE"
            farve="#002a1299"
          />
        </Link>
        <Lillefirkant
          src={skattejagt}
          alt="Skattejagt"
          farve="#fbd453BF"
        />
      </div>
      <Link to="/mad">
        <Rektangel
          tekst="MAD OG"
          tekst2="SPISESTEDER"
          src={abe}
          alt="Abe med banan"
          farve="#4e722cBF"
          br="50px 5px"
        />
      </Link>
    </div>
  )
}

export default Forside