import Armbandcomp from "../components/Armbandcomp"
import scanarm from "../assets/mobilarmband.svg";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import mobilpay from "../assets/mobilepay.png";

export default function Armband() {
const navigate = useNavigate();
const [armband, setArmband] = useState([]); 
const [isArmband, setIsArmband]= useState(true);
const [saldo,setSaldo]=useState("");
const [user,setUser] = useState("");
const [armbaandId, setArmbaandid] = useState("");

async function getArm(){
  // hent info fra Firebase Realtime Database
    let useremail = localStorage.getItem("user")
    setUser(useremail);
    const urlArm =`https://jyllandsparkzoo-b84ba-default-rtdb.europe-west1.firebasedatabase.app/bruger/${useremail}/armband.json`;

    // vent indtil response modtager positivt svar fra firebase
    const responseArm = await fetch(urlArm);
    // læs json data (listen af møder) over i variablen "data"
    const dataArm = await responseArm.json();
    // console.log(data);
    /* tjek om der faktisk er møder på listen (positiv hvis
        forskellig fra null) */
    if (dataArm !==null){
      // Konverter data til et array a møder
        const armArray = Object.keys(dataArm).map((key)=>
        ({
            id: key,
            ...dataArm[key],
        }));
        setArmband(armArray)
        console.log(armArray);
        localStorage.setItem("armband", JSON.stringify(armArray));
    } else {
      // hvis der ikke er nogen møder, set isPosts til falsk
        setIsArmband(false);
    }
}

// useEffect armbånd
useEffect(() => {
  getArm();
},[])

useEffect(() => {
  const lukKnap = document.getElementById("lukKnap");
  lukKnap.addEventListener("click" ,lukDialog);

  return () => {
    lukKnap.removeEventListener('click', lukDialog);
  };
},[])

function lukDialog() {
  const dialog = document.getElementById("dialog");
  dialog.close();
}

function AabnDialog(event) {
  const id = event.target.value; // Id på det valgte armbånd
  const aktuelleSaldo = event.target.dataset.saldo; // Saldo på det valgte armbånd
  setSaldo(aktuelleSaldo);

  setArmbaandid(id);
  const dialog = document.getElementById("dialog");
  dialog.showModal();
}

async function gemSaldo() {

  const formData = {
    saldo: saldo
  }

  try {
      const response = await fetch(`https://jyllandsparkzoo-b84ba-default-rtdb.europe-west1.firebasedatabase.app/bruger/${user}/armband/${armbaandId}.json`, {
          method: "PATCH", // betyder opdater en enkelt attribut (her saldo) og ikke alle attributter (som "PUT" gør)
          body: JSON.stringify(formData)
      });
      const data = await response.json();
      console.log(data);
      Swal.fire({
        title: "Saldo opdateret",
        text: "Armbåndes saldo er nu opdateret",
        icon: "success",
        color:"#013D19",
        background: "#FCFAEE",
        allowOutsideClick: false,
        confirmButtonText: "Forsæt",
        buttonsStyling: false,
        iconColor: "#013D19"
      });
      getArm();
  } catch {
    console.log("error")
  }

}


  return (
    <>
      {isArmband ? (
        <div className="armband">
            <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
          <h1 style={{marginTop:"1vh"}}>Armbånd</h1>
          <div>
                {armband.map(armband => (
                    <Armbandcomp 
                    key={armband.id}
                    armbaandid={armband.id}
                    farve={armband.farve}
                    navn={armband.navn}
                    saldo={armband.saldo}
                    type={armband.type}
                    AabnDialog={AabnDialog}
                    />
                ))}
            </div>
            <button className="lysknap" style={{ display:"inline-block", marginTop:"5vh"}}  onClick={() => navigate("/tilfojarmband")}>Tilføj armbånd</button>
            
            <dialog id="dialog" className="dialog">
                <form method="dialog" onSubmit={gemSaldo} >
                    <button type="button" id="lukKnap" className="lukknap">X</button>
                    <label >
                        Hvor meget vil du sætte ind?<input type="number" name="saldo" value={saldo || 0} placeholder="Indtast Saldo" onChange={e => setSaldo(e.target.value)} required />
                    </label>
                    <input placeholder="Kortnummer"/> 
                    <input placeholder="Udløbsdato"/> 
                    <input placeholder="CVV"/> 
                    <button type="submit" >Betal</button>
                    <p><em>Eller betal med</em></p>
                    <img src={mobilpay} alt="Årskort"/>
                </form>
            </dialog>
          </div>
        ) : (
          <div className="tomarmpakke">
            <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
            <div className="tomarm">
              
              <h1>Tilføj Armbånd</h1>
              <img src={scanarm} alt="Skan dit armbånd med din mobil for at tilføje dine armbånd" />
              <p>Hold din telefon på dit armbånd og afvent indlæsning.</p>

            </div>
          </div>
        )}
      
    </>
  )
}

