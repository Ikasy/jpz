import profil from "../assets/profil.svg";
import prikker from "../assets/prikker.svg";
import blyant from "../assets/blyant.svg";

function Profil() {
  let armband=false;
  let billet=false;
  let booking=false;

  return (
    <div >
      <img style={{display:"block", margin:"2vh 2vh 0 auto", height:"3vh"}} src={prikker} alt="Åben instillinger" />
      <div className="profil">
        <h1>Profil</h1>
        <img src={profil} alt="Profilbillede" />
        <p><b>Navn:</b> </p> {/* Indsæt fra firebase */}
        <p><b>Bruger-id:</b> </p> {/* Indsæt fra firebase */}
        <p>Ret personlige oplysninger <img src={blyant} alt="Rediger oplysninger" /></p>
      </div>
      <div className="profilkort">
        {billet ? (
            <div>
              <h1>Billetter/Årskort</h1>
              <div className="nyemoeder" style={{flexWrap:"wrap"}}>
                {filtrerMoeder.map((moederobjekt) => (
                  <Kundemoede key={moederobjekt.id} moeder={moederobjekt} handleButton={handleButton}/>
                ))}
                </div>
              </div>
            ) : (
              <div>
                <h1>Billetter/Årskort</h1>
                <p>Ingen nuværende billetter</p>
                <button className="morkknap">Køb billet/årskort</button>
                <button className="lysknap">Tilføj årskort</button>
              </div>
        )}

        {armband ? (
            <div>
              <h1>Armbånd</h1>
              <div className="nyemoeder" style={{flexWrap:"wrap"}}>
                {filtrerMoeder.map((moederobjekt) => (
                  <Kundemoede key={moederobjekt.id} moeder={moederobjekt} handleButton={handleButton}/>
                ))}
                </div>
              </div>
            ) : (
              <div>
                <h2>Armbånd</h2>
                <p>Hovsa... Det ser ud til du ikke har nogle armbånd tilgængelige. </p>
                <p>Tryk på Tilføj for at forbinde med dine armbånd.</p>
                <button className="lysknap">Tilføj armbånd</button>
              </div>
        )}

        {booking ? (
            <div>
              <h1>Bookinger</h1>
              <div className="nyemoeder" style={{flexWrap:"wrap"}}>
                {filtrerMoeder.map((moederobjekt) => (
                  <Kundemoede key={moederobjekt.id} moeder={moederobjekt} handleButton={handleButton}/>
                ))}
                </div>
              </div>
            ) : (
              <div>
                <h2>Bookinger</h2>
                <p>Ingen nuværende bookinger</p>
                <button className="lysknap">Opret booking</button>
              </div>
        )}
      </div>
    </div>
  )
}

export default Profil