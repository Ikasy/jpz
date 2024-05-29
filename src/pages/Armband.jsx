import Armbandcomp from "../components/Armbandcomp"
import scanarm from "../assets/mobilarmband.svg";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

function Armband() {
const navigate = useNavigate();
const [armband, setArmband] = useState([]); 
const [isArmband, setIsArmband]= useState(true);

// useEffect armbånd
useEffect(() => {
  async function getArm(){
    // hent info fra Firebase Realtime Database
      let useremail = localStorage.getItem("user")
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
getArm();

},[]);


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
                    farve={armband.farve}
                    navn={armband.navn}
                    saldo={armband.saldo}
                    type={armband.type}
                    />
                ))}
            </div>
            <button className="lysknap" style={{ display:"inline-block", marginTop:"5vh"}}  onClick={() => navigate("/tilfojarmband")}>Tilføj armbånd</button>
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

export default Armband
{/* <Armbandcomp
navn="Birgitte"
saldo="0 kr"
type="Primære"
farve="#d84f54bf"
/>
<Armbandcomp
navn="lise"
saldo="0 kr"
type="Sekundær"
farve="#4f94c6bf"
/> */}