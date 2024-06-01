import { useNavigate } from "react-router-dom"

function Mad() {
  let navigate = useNavigate();

  return (
    <>
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
      <h1>Mad og spisesteder</h1>
      <p>I Jyllands Park Zoo er I velkomne til at medbringe mad og drikke. Vi har ca. 850 siddepladser i hyggelige omgivelser til at nyde jeres medbragte mad.</p>
      <p>Vores kiosker og cafeteria tilbyder også et godt udvalg af mad og drikke til både voksne og børn, inklusive burgere, sandwich, pølsehorn, pizza og børnemenuer som fiskefilet, frikadeller og kyllingespyd. </p>
      <p>(Egen mad og drikke må ikke medbringes i kioskerne og cafeteriet.)</p>
      <button onClick={() => navigate("/cafemenu")}>Cafeteriamenu</button>
      <button onClick={() => navigate("/grill")}>Grill-selv</button>
    </>
  )
}

export default Mad