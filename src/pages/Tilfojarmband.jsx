import { useNavigate } from 'react-router-dom';
import scanarm from "../assets/mobilarmband.svg";

function Tilfojarmband() {
  const navigate = useNavigate();

  return (
    <div className="tomarmpakke">
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
      <div className="tomarm">
        <h1>Tilføj Armbånd</h1>
        <img src={scanarm} alt="Skan dit armbånd med din mobil for at tilføje dine armbånd" />
        <p>Hold din telefon på dit armbånd og afvent indlæsning.</p>
      </div>
    </div>
  )
}

export default Tilfojarmband