import { Link, Navigate, useNavigate } from "react-router-dom"
import ShopEl from "../components/shopelement";
import aarskort from "../assets/aarskort-lys.svg";
import billet from "../assets/biletter-lys.svg";
import armband from "../assets/armbandfirkant-lys.svg";
import turkort from "../assets/turkort-lys.svg";

function Shop() {
let navigate = useNavigate();
  return (
    <div className="shopside">
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
      <h1 style={{marginTop:"1vh", textAlign:"center"}}>Shop</h1>
      <Link>
        <ShopEl
          navn= "KØB ÅRSKORT"
          src={aarskort}
          alt="Årskort visuelisation"
        />
      </Link>

      <Link>
        <ShopEl
          navn= "KØB ENTRÉ"
          src={billet}
          alt="Billet visuelisation"
        />
      </Link>

      <Link>
        <ShopEl
          navn= "LEJE AF ARMBÅND"
          src={armband}
          alt="Hånd med et armbånd"
        />
      </Link>

      <Link>
        <ShopEl
          navn= "KØB TURKORT"
          src={turkort}
          alt="Billede af turkort"
        />
      </Link>
    </div>
  )
}

export default Shop