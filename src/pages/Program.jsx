import { useNavigate } from "react-router-dom";
import Programcomp from "../components/programcomp";
import sobjorn from "../assets/sobjorn.svg";
import pingvin from "../assets/pingvin.svg";
import slange from "../assets/slange.svg";
import facepaint from "../assets/facepaint.svg";
import facepaint10 from "../assets/facepaint10.svg";
import facepaint15 from "../assets/facepaint15.svg";
import sobjorn11 from "../assets/sobjorn11.svg";
import sobjorn1430 from "../assets/sobjorn1430.svg";
import slange1130 from "../assets/slanger1130.svg";
import pingvin1530 from "../assets/pingvin1530.svg";

function Program() {
  let navigate = useNavigate();

  return (
    <>
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
      <section className="dagprogram">
        <h1>Dagens Program</h1>
        <div>
          <img src={facepaint10} alt="ansigtsmaling kl 10" />
          <img src={sobjorn11} alt="søbjørne fodring kl 11" />
          <img src={slange1130} alt="slangeshow kl 11:30" />
          <img src={sobjorn1430} alt="søbjørne fodring kl 14:30" />
          <img src={facepaint15} alt="ansigtsmaling kl 15" />
          <img src={pingvin1530} alt="Pingvin show kl 15:30" />
        </div>
      </section>
    </>
  )
}
export default Program