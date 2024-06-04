import { useNavigate } from "react-router-dom";
import cafemenu from "../assets/menu.png"
import grillpolse from "../assets/grillpolse.svg"
function Cafemenu() {
  let navigate = useNavigate();
  return (
    <>
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
      <section className="mad">
        <h1 style={{ textAlign: "center" }}>Cafeteriamenu</h1>
        <img style={{ width: "100%", margin: "auto", display: "block" }} src={cafemenu} alt="Cafe menu" />
        <img style={{ width: "50%", margin: "2vh auto auto auto", display: "block" }} src={grillpolse} alt="grill pølse på gaffel" />
      </section>
    </>
  )
}

export default Cafemenu