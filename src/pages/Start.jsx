import logotekst from "../assets/logomedtekst.svg"
import DK from "../assets/DKflag.png"
import DE from "../assets/DEflag.png"
import UK from "../assets/UKflag.png"
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  return (
    <div className="start">
      <img className="logoopret" src={logotekst} alt="Jyllands Park Zoo Logo" />
      <h1><em>Velkommen til Jyllands Park Zoo App</em></h1>
      <button onClick={() => navigate("/login")}>Forsæt med login</button>
      <p>eller</p>
      <button onClick={() => navigate("/")}>Forsæt som gæst</button>
      <button className="lysknap" onClick={() => navigate("/opret")}>Opret ny bruger</button>
      <p><em><u>Hvordan bruges appen?</u></em></p>
      
      <div className="flag">
        <img src={DK} alt="Dansk flag. Skift til dansk sprog" />
        <img src={DE} alt="Tysk flag. Skift til Tysk sprog" />
        <img src={UK} alt="Engelsk flag. Skift til engelsk sprog" />
      </div>
    </div>
  )
}

export default Start