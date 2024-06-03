import { useNavigate } from "react-router-dom";
import cafemenu from "../assets/menu.png"
function Cafemenu() {
  let navigate = useNavigate();
  return (
    <section className="mad">
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
      <h1 style={{ textAlign: "center" }}>Cafeteriamenu</h1>
      <img style={{ width: "100%", margin: "auto", display: "block" }} src={cafemenu} alt="Cafe menu" />
    </section>
  )
}

export default Cafemenu