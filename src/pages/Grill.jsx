import { useNavigate } from "react-router-dom";
import grillmenu from "../assets/grillmenu.png"
import Swal from "sweetalert2";

function Grill() {
  let navigate = useNavigate();
  
  async function handleSubmit(event) {
    event.preventDefault();
    const user = localStorage.getItem("user");
  
    if (user !== null) {
  
      const baseUrl = `https://jyllandsparkzoo-b84ba-default-rtdb.europe-west1.firebasedatabase.app/bruger/${user}`;
  
      // Get user data from Firebase
      const response = await fetch(baseUrl + ".json");
      const data = await response.json();
      console.log(data);
  
      const form = event.target;
      const sted = form.sted.value;
      const tid = form.tid.value;
      const navn = data.fornavn + " " + data.efternavn;
  
      // datoen er en pladsholder dato, og kunne være hvilken som helst, eller den dag det skulle bookes på
      const selectedTime = new Date(`2000-01-01T${tid}`);
      // tilføjer de 30 minutter til den valgte tid
      selectedTime.setMinutes(selectedTime.getMinutes() + 30);
      // skærer datoen væk fra den valgte tid så der kun er tidspunktet tilbage
      const thirtyminslater = selectedTime.toTimeString().slice(0, 5);
  
      const booking = {
        lokation: sted,
        tidspunkt: tid,
        udlob: thirtyminslater,
        navn: navn
      };
      console.log(booking);
      console.log(`Updating booking with items:`, booking); // Log the items being sent
  
      try {
        const response = await fetch(`${baseUrl}/bookinger.json`, {
          method: "POST",
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(booking)
        });
        const data = await response.json();
        console.log(`Updated booking:`, data);
  
        // Swal confirmation on successful booking
        Swal.fire({
          title: "Succes!",
          text: "Din booking er gennemført",
          icon: "success",
          color: "#013D19",
          background: "#FCFAEE",
          confirmButtonText: "Fortsæt",
          buttonsStyling: false,
          iconColor: "#013D19"
        });
  
      } catch (error) {
        console.error(`Error updating booking:`, error);
      }
  
    } else {
      Swal.fire({
        title: "Login mangler",
        text: "Du skal oprette bruger eller logge ind for at booke",
        icon: "error",
        color:"#d84f52",
        background: "#FCFAEE",
        allowOutsideClick: false,
        confirmButtonText: "Opret bruger",
        buttonsStyling: false,
        iconColor: "#d84f52"
      }).then(() => {
        navigate("/start");
      });
    }
  }
  














    
  
  

  return (
    <>
    <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
      <h1 style={{textAlign: "center"}}>Grill-selv menu</h1>
      <p>I Jyllands Park Zoo er I velkomne til selv at medbringe mad og drikkevarer. Der mangler naturligvis heller ikke en grill. Der står en grill til fri afbenyttelse, og som kan bookes, ved legepladsen og Sø-kiosken. Grillen bookes på besøgsdagen.</p>
      <p>Vi tilbyder naturligvis også grillbakker og ”bland selv” grillbakker, I kan grille i parken.</p>
      <form onSubmit={handleSubmit}>
        <input style={{height: "auto", width: "auto", display:"inline-block", marginRight:"2vw"}}type="radio" id="legeplads" name="sted" value="legeplads"/>
        <label htmlFor="legeplads">Grill ved legepladsen</label>
        <br />
        <input style={{height: "auto", width: "auto", display:"inline-block", marginRight:"2vw"}} type="radio" id="kiosk" name="sted" value="kiosk"/>
        <label htmlFor="kiosk">Grill ved sø-kiosken</label>
        
        <input style={{ width: "auto"}} name="tid" type="time" id="tid"/>

        <button type="submit">Book</button>
      </form>
      <img style={{width: "90%", margin:"auto", display: "block"}} src={grillmenu} alt="grill menu" />
      <i>
        <p>Inkl. engangsservice</p>
        <p>Grillbakker skal bestilles dagen før, mens bestillinger til mere end 20 personer bestilles 7 dage før.</p>
        <p>For mere information/bestilling kontakt cafeteriet på <u>97 16 61 88</u></p>
      </i>
    </>
  )
}

export default Grill
