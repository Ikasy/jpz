import grill from "../assets/grill.svg"

function Booking(props) {

    return (
        <div className="booking">
            <img src={grill} alt="Grill ikon" />
            <div>
                <h3>{props.lokation}</h3>
                <p>Navn: {props.navn}</p>
                <p>Tidspunkt: {props.start}-{props.slut}</p>
            </div>
        </div>

    )
  }
  
  export default Booking