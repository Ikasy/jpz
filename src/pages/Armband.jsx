import Armbandcomp from "../components/Armbandcomp"
import scanarm from "../assets/mobilarmband.svg";

function Armband() {
let armband=false
  return (
    <>
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
          <div className="tomarm">
            <h1>Tilføj Armbånd</h1>
            <img src={scanarm} alt="Skan dit armbånd med din mobil for at tilføje dine armbånd" />
            <p>Hold din telefon på dit armbånd og afvent indlæsning.</p>
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