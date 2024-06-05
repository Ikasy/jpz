import profil from "../assets/profil.svg";
import prikker from "../assets/prikker.svg";
import blyant from "../assets/blyant.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { auth } from '../firebase-config';
import { signOut } from 'firebase/auth';
import logotekst from "../assets/logomedtekst.svg"
import DK from "../assets/DKflag.png"
import DE from "../assets/DEflag.png"
import UK from "../assets/UKflag.png"
import Billet from "../components/billet";
import Booking from "../components/Booking";

function Profil() {
  const user = localStorage.getItem("user");

// bruges til at navigere til forskellige URL'er
  const navigate = useNavigate();
  const [armband, setArmband] = useState([]); 
  const [isArmband, setIsArmband]= useState(true);
  
  const [booking, setBooking] = useState([]);
  const [isBooking, setIsBooking]= useState(true);
  
  const [billetter, setBilletter] = useState([]);
  const [isBilletter, setIsBilletter]= useState(true);
  
  const [bruger, setBruger] = useState([]);
  const [isBruger, setIsBruger]= useState(true);
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
// useEffect Booking
useEffect(() => {
  async function getBok(){
    // hent info fra Firebase Realtime Database
      let useremail = localStorage.getItem("user")
      const urlBok =`https://jyllandsparkzoo-b84ba-default-rtdb.europe-west1.firebasedatabase.app/bruger/${useremail}/bookinger.json`;

      // vent indtil response modtager positivt svar fra firebase
      const responseBok = await fetch(urlBok);
      // læs json data (listen af bookinger) over i variablen "data"
      const dataBok = await responseBok.json();

      /* tjek om der faktisk er bookinger på listen (positiv hvis
          forskellig fra null) */
      if (dataBok !==null){
        // Konverter data til et array af bookinger
          const bokArray = Object.keys(dataBok).map((key)=>
          ({
              id: key,
              ...dataBok[key],
          }));
          setBooking(bokArray)
          localStorage.setItem("bookinger", JSON.stringify(bokArray));

          console.log(bokArray);
      } else {
        // hvis der ikke er nogen bookinger, set isbooking til falsk
          setIsBooking(false);
      }
  }
getBok();

},[]);
// useEffect Billetter
useEffect(() => {
  async function getBil(){
    // hent info fra Firebase Realtime Database
      let useremail = localStorage.getItem("user")
      const urlBil =`https://jyllandsparkzoo-b84ba-default-rtdb.europe-west1.firebasedatabase.app/bruger/${useremail}/billetter.json`;

      // vent indtil response modtager positivt svar fra firebase
      const responseBil = await fetch(urlBil);
      // læs json data (listen af møder) over i variablen "data"
      const dataBil = await responseBil.json();

      // console.log(data);
      /* tjek om der faktisk er møder på listen (positiv hvis
          forskellig fra null) */
      if (dataBil !==null){
        // Konverter data til et array a møder
          const bilArray = Object.keys(dataBil).map((key)=>
          ({
              id: key,
              ...dataBil[key],
          }));
          setBilletter(bilArray)
          localStorage.setItem("billetter", JSON.stringify(bilArray));

          console.log(bilArray);
      } else {
        // hvis der ikke er nogen møder, set isPosts til falsk
          setIsBilletter(false);
      }
  }
getBil();

},[]);

//useEffekt til bruger oplysninger
useEffect(() => {
  async function getBruger(){
    // hent info fra Firebase Realtime Database
      let useremail = localStorage.getItem("user")
      const urlBruger =`https://jyllandsparkzoo-b84ba-default-rtdb.europe-west1.firebasedatabase.app/bruger/${useremail}.json`;

      // vent indtil response modtager positivt svar fra firebase
      const responseBruger = await fetch(urlBruger);
      // læs json data (listen af møder) over i variablen "data"
      const dataBruger = await responseBruger.json();

      console.log(dataBruger);
      /* tjek om der faktisk er møder på listen (positiv hvis
          forskellig fra null) */
      if (dataBruger !==null){
        // Konverter data til et array a møder
          const brugerArray = Object.keys(dataBruger).map((key)=>
          ({
              id: key,
              ...dataBruger[key],
          }));
          setBruger(dataBruger)
          localStorage.setItem("dataBruger", JSON.stringify(brugerArray));

          console.log(brugerArray);
      } else {
        // hvis der ikke er nogen møder, set isPosts til falsk
          setIsBruger(false);
      }
  }
getBruger();

},[]);
async function handleLogout() {
  try {
      await signOut(auth);
      localStorage.removeItem('user');
      navigate("/profil");
  } catch (error) {
      console.error(error);
  }
}

  return (
    <div >

      {user !== null ? (
        <>
        <img style={{display:"block", margin:"2vh 2vh 0 auto", height:"3vh"}} src={prikker} alt="Åben instillinger" />
      <div className="profil">
        <h1>Profil</h1>

        <img src={profil} alt="Profilbillede" />
        <p><b>Navn:</b> {bruger. fornavn} {bruger.efternavn} </p> {/* Indsæt fra firebase */}
        <p><b>E-mail:</b> {bruger.email} </p> {/* Indsæt fra firebase */}
        <p>Ret personlige oplysninger <img src={blyant} alt="Rediger oplysninger" /></p>
      </div>
      <div className="profilkort">
        {isBilletter ? (
            <div>
              <h2>Billetter/Årskort</h2>
              <div>
                {billetter.map(billetter => (
                    <Billet 
                    key={billetter.id}
                    type={billetter.type}
                    navn={billetter.navn}
                    udlob={billetter.udlob}
                    />
                ))}
                </div>
              </div>
            ) : (
              <div>
                <h2>Billetter/Årskort</h2>
                <p>Ingen nuværende billetter</p>
                <button className="morkknap" onClick={() => navigate("/shop")}>Køb billet/årskort</button>
                <button className="lysknap">Tilføj årskort</button>
              </div>
        )}

        {isArmband ? (
            <div>
              <h2>Armbånd</h2>
                <button className="lysknap" onClick={() => navigate("/armband")}> Se armbånd</button>
              </div>
            ) : (
              <div>
                <h2>Armbånd</h2>
                <p>Hovsa... Det ser ud til du ikke har nogle armbånd tilgængelige. </p>
                <p>Tryk på Tilføj for at forbinde med dine armbånd.</p>
                <button className="lysknap" onClick={() => navigate("/armband")}>Tilføj armbånd</button>
              </div>
        )}

        {isBooking ? (
            <div>
              <h2>Bookinger</h2>
              <div>
              {booking.map(booking => (
                    <Booking 
                    key={booking.id}
                    lokation={booking.lokation}
                    navn={booking.navn}
                    start={booking.tidspunkt}
                    slut={booking.udlob}
                    />
                ))}
                </div>
              </div>
            ) : 
            (
              <div>
                <h2>Bookinger</h2>
                <p>Ingen nuværende bookinger</p>
                <button className="lysknap" onClick={() => navigate("/grill")}>Opret booking</button>
              </div>
        )}
      </div>
      <button style={{margin: "5vh auto 15vh auto", display:"block"}} onClick={handleLogout}>Logout</button>
        </>
      ) : (
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
      )}

    </div>
  )
}

export default Profil