import { useNavigate } from "react-router-dom"
import ShopEl from "../components/shopelement";
import aarskort from "../assets/aarskort-lys.svg";
import billet from "../assets/biletter-lys.svg";
import armband from "../assets/armbandfirkant-lys.svg";
import turkort from "../assets/turkort-lys.svg";
import kurv from "../assets/kurv.svg";
import skrald from "../assets/skraldespand.svg";
import { useEffect, useState } from "react";
import Swal from 'sweetalert2';



function Shop() {
let navigate = useNavigate();
const [basketItems, setBasketItems] = useState([]);

// til kurv
function AabnDialog() {
  const dialog = document.getElementById("dialog");
  dialog.showModal();
}
function lukDialog() {
  const dialog = document.getElementById("dialog");
  dialog.close();
}
// eventlistener på kurven til åben og luk
useEffect(() => {
  const lukKnap = document.getElementById("lukKnap");
  lukKnap.addEventListener("click" ,lukDialog);

  return () => {
    lukKnap.removeEventListener('click', lukDialog);
  };
},[])


async function showAarskort() {
  try {
    const { value: formValues } = await Swal.fire({
      title: 'Årskort',
      html:
        `<div style="text-align: left;">
          <h3><strong>Priser:</strong></h3>
          <p><strong>Barn, 0-1 år:</strong> Gratis</p>
          <p><strong>Barn, 2-11 år:</strong> 250 DKK</p>
          <p><strong>Voksen:</strong> 385 DKK</p>
          <p><strong>Senior, +65 år:</strong> 365 DKK</p>
        </div>
        
        <input id="swal-input1" class="swal2-input" placeholder="Navn"> 
        <select id="swal-input2" class="swal2-input">
          <option value="barn">Barn</option>
          <option value="voksen">Voksen</option>
          <option value="senior">Senior</option>
        </select>
        <div style="margin-top: 20px; text-align: center;">
          <img src=${aarskort} alt="Årskort">
        </div>
        `,
      focusConfirm: false, 
      showCancelButton: true,
      confirmButtonText: 'Læg i kurv',
      cancelButtonText: 'Annuller',
      reverseButtons: true,
      buttonsStyling: false,
      background: '#FCFAEE',
      customClass: {
        cancelButton: 'outlineknap' // Tilføj din klasse her
      },
      
      preConfirm: () => {
        const navn = document.getElementById('swal-input1').value;
        const alder = document.getElementById('swal-input2').value;
        return { navn: navn, alder: alder };
      }
    });

    if (formValues) {
      const { navn, alder } = formValues;
      const currentTime = new Date().getTime();
      const oneYearFromNow = currentTime + (365 * 24 * 60 * 60 * 1000);

      const formattedNowDate = new Date(currentTime).toLocaleDateString();
      const formattedYearDate = new Date(oneYearFromNow).toLocaleDateString();

      const user = {
        navn: navn,
        alder: alder,
        kobt: formattedNowDate,
        type: "arskort",
        udlob: formattedYearDate
      };
      addToBasket(user);
    
      Swal.fire({
        title: " Lagt i kurv!",
        text: "Din vare er nu lagt i kurven",
        icon: "success",
        color:"#013D19",
        background: "#FCFAEE",
        allowOutsideClick: false,
        confirmButtonText: "Forsæt",
        buttonsStyling: false,
        iconColor: "#013D19"
      });
      setBasketItems(getBasketItems());
    }
  } catch (error) {
    Swal.fire('Fejl!', 'Der opstod en fejl ved gemning af data.', 'error');
    console.log(error);
  }
}
async function showBil() {
  try {
    const { value: formValues } = await Swal.fire({
      title: 'Entré billet',
      html:
        `<div style="text-align: left;">
          <h3><strong>Entré:</strong></h3>
          <p><strong>Barn, 0-1 år:</strong> Gratis</p>
          <p><strong>Barn, 2-11 år:</strong> 130 DKK</p>
          <p><strong>Voksen:</strong> 200 DKK</p>
          <p><strong>Senior, +65 år:</strong> 180 DKK</p>
        </div>
        
        <input id="swal-input1" class="swal2-input" placeholder="Navn"> 
        <select id="swal-input2" class="swal2-input">
          <option value="barn">Barn</option>
          <option value="voksen">Voksen</option>
          <option value="senior">Senior</option>
        </select>
        <div style="margin-top: 20px; text-align: center;">
          <img src=${billet} alt="billetter">
        </div>
        `,
      focusConfirm: false, 
      showCancelButton: true,
      confirmButtonText: 'Læg i kurv',
      cancelButtonText: 'Annuller',
      reverseButtons: true,
      buttonsStyling: false,
      background: '#FCFAEE',
      customClass: {
        cancelButton: 'outlineknap' // Tilføj din klasse her
      },
      
      preConfirm: () => {
        const navn = document.getElementById('swal-input1').value;
        const alder = document.getElementById('swal-input2').value;
        return { navn: navn, alder: alder };
      }
    });

    if (formValues) {
      const { navn, alder } = formValues;
      const currentTime = new Date().getTime();
      const oneYearFromNow = currentTime + (365 * 24 * 60 * 60 * 1000);

      const formattedNowDate = new Date(currentTime).toLocaleDateString();
      const formattedYearDate = new Date(oneYearFromNow).toLocaleDateString();

      const user = {
        navn: navn,
        alder: alder,
        kobt: formattedNowDate,
        type: "billet",
        udlob: formattedYearDate
      };
      addToBasket(user);
    
      Swal.fire({
        title: "Lagt i kurv!",
        text: "Din vare er nu lagt i kurven",
        icon: "success",
        color:"#013D19",
        background: "#FCFAEE",
        allowOutsideClick: false,
        confirmButtonText: "Forsæt",
        buttonsStyling: false,
        iconColor: "#013D19"
      });
      setBasketItems(getBasketItems());
    }
  } catch (error) {
    Swal.fire('Fejl!', 'Der opstod en fejl ved gemning af data.', 'error');
    console.log(error);
  }
}
async function showArm() {
  try {
    const { value: formValues } = await Swal.fire({
      title: 'Leje af armbånd',
      html:
        `<div style="text-align: left;">
          <h3><strong>Armbånd:</strong></h3>
          <p>Armbåndet giver adgang til alle faciliteter og aktiviteter i parken.</p>
          <p>Armbånd pr. styk </p>
          <p>30 DKK</p>
          
        </div>
        
        <input id="swal-input1" class="swal2-input" placeholder="Navn"/> 
        <input type="number" id="swal-input2" class="swal2-input" placeholder="Start saldo"/> 
        <select id="swal-input3" class="swal2-input">
          <option value="primar">Primære</option>
          <option value="sekundar">Sekundær</option>
        </select>
        <select id="swal-input4" class="swal2-input">
          <option value="red">Rød</option>
          <option value="blue">Blå</option>
          <option value="orange">Orange</option>
          <option value="green">Grøn</option>
        </select>
        <div style="margin-top: 20px; text-align: center;">
          <img src=${armband} alt="Armbånd"/>
        </div>
        `,
      focusConfirm: false, 
      showCancelButton: true,
      confirmButtonText: 'Læg i kurv',
      cancelButtonText: 'Annuller',
      reverseButtons: true,
      buttonsStyling: false,
      background: '#FCFAEE',
      customClass: {
        cancelButton: 'outlineknap' // Tilføj din klasse her
      },
      
      preConfirm: () => {
        const navn = document.getElementById('swal-input1').value;
        const saldo = document.getElementById('swal-input2').value;
        const type = document.getElementById('swal-input3').value;
        const farve = document.getElementById('swal-input4').value;
        return { navn: navn, farve: farve, saldo: saldo,  type: type };
      }
    });

    if (formValues) {
      const { navn, farve, saldo, type } = formValues;
      const currentTime = new Date().getTime();
      const oneDayFromNow = currentTime + (24 * 60 * 60 * 1000);

      const formattedNowDate = new Date(currentTime).toLocaleDateString();
      const formattedDayFromNow = new Date(oneDayFromNow).toLocaleDateString();

      const user = {
        navn: navn,
        farve: farve,
        saldo: saldo,
        type: type,
        shop: "armband",
        kobt: formattedNowDate,
        udlob: formattedDayFromNow
      };
      addToBasket(user);
    
      Swal.fire({
        title: " Lagt i kurv!",
        text: "Din vare er nu lagt i kurven",
        icon: "success",
        color:"#013D19",
        background: "#FCFAEE",
        allowOutsideClick: false,
        confirmButtonText: "Forsæt",
        buttonsStyling: false,
        iconColor: "#013D19"
      });
      setBasketItems(getBasketItems());
    }
  } catch (error) {
    Swal.fire('Fejl!', 'Der opstod en fejl ved gemning af data.', 'error');
    console.log(error);
  }
}

function addToBasket(item) {
  // Generate a unique key for the item
  const uniqueKey = `basket_item_${new Date().getTime()}`;
    sessionStorage.setItem(uniqueKey, JSON.stringify({ key: uniqueKey, item }));
    console.log(`Item added to basket: ${JSON.stringify(item)}`);

}

function getBasketItems() {
  const items = [];

  // Iterate through session storage keys
  for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);

      // Check if the key matches the basket item pattern
      if (key.startsWith('basket_item_')) {
          const itemString = sessionStorage.getItem(key);

          // Convert the JSON string back to an object and add it to the items array
          items.push(JSON.parse(itemString));
      }
  }
  console.log(`Basket items fetched: ${JSON.stringify(items)}`);
  return items;
}

// Remove item from basket
function removeFromBasket(key) {
  sessionStorage.removeItem(key);
  setBasketItems(getBasketItems());
}
// putter i kurv
useEffect(() => {
  setBasketItems(getBasketItems());
}, []);


  // Submit basket items to Firebase
  async function handleSubmit(event) {
    event.preventDefault();

    const user = localStorage.getItem("user")

    if  (user !== null) {
      const baseUrl = `https://jyllandsparkzoo-b84ba-default-rtdb.europe-west1.firebasedatabase.app/bruger/${user}`;

      const categorizeItems = (items) => {
          const categorized = {
              armband: {},
              billetter: {}
          };

          items.forEach((item, index) => {
              const uniqueKey = `item_${new Date().getTime()}_${index}`;
              if (item.item.type === "arskort" || item.item.type === "billet") {
                  categorized.billetter[uniqueKey] = item.item;
              } else if (item.item.shop === "armband") {
                  categorized.armband[uniqueKey] = item.item;
              } 
          });

          return categorized;
      };

      const categorizedItems = categorizeItems(basketItems);

      const updateFirebase = async (category, items) => {
          console.log(`Updating category: ${category} with items:`, items); // Log the items being sent
          try {
              const response = await fetch(`${baseUrl}/${category}.json`, {
                  method: "PATCH",
                  headers: {
                      'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(items)
              });
              const data = await response.json();
              console.log(`Updated ${category}:`, data);
          } catch (error) {
              console.error(`Error updating ${category}:`, error);
          }
      };

      try {
          await updateFirebase("armband", categorizedItems.armband);
          await updateFirebase("billetter", categorizedItems.billetter);

          Swal.fire({
              title: "Success!",
              text: "Købet er succesfuldt!",
              icon: "success",
              color: "#013D19",
              background: "#FCFAEE",
              confirmButtonText: "Forsæt",
              buttonsStyling: false,
              iconColor: "#013D19"
          });

          // Clear basket after submission
          sessionStorage.clear();
          setBasketItems([]);
          lukDialog();
      } catch (error) {
          Swal.fire('Error!', 'There was an error submitting your items.', 'error');
          console.error("Error submitting items: ", error);
      }
    } else {
      lukDialog();
      Swal.fire({
        title: "Login mangler",
        text: "Du skal oprette bruger eller logge ind for at gennemfører køb",
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
    <div className="shopside">
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
      <img onClick={AabnDialog} style={{position:"absolute",right: "2vh", top:"0.8vh", height:"4vh"}} src={kurv} alt="Åben Kurven" />
      <h1 style={{marginTop:"1vh", textAlign:"center"}}>Shop</h1>
      
        <ShopEl
          navn= "KØB ÅRSKORT"
          src={aarskort}
          alt="Årskort visuelisation"
          open={showAarskort}
        />
      
        <ShopEl
          navn= "KØB ENTRÉ"
          src={billet}
          alt="Billet visuelisation"
          open={showBil}
        />
 
        <ShopEl
          navn= "LEJE AF ARMBÅND"
          src={armband}
          alt="Hånd med et armbånd"
          open={showArm}
        />

        <ShopEl
          navn= "KØB TURKORT"
          src={turkort}
          alt="Billede af turkort"
        />


      <dialog id="dialog" className="dialog">
        <form method="dialog" onSubmit={handleSubmit}>
          <button type="button" id="lukKnap" className="lukknap">X</button>
          <ul>
            {basketItems.length > 0 ? (
              basketItems.map((item, index) => (
                <li key={index}>
                  {item.item.navn} -- {item.item.alder} {item.item.type}
                  <img
                    onClick={() => removeFromBasket(item.key)}
                    src={skrald}
                    alt="Slet"
                    style={{ cursor: 'pointer', marginLeft: '10px' }}
                  />
                </li>
              ))
            ) : (
              <li>Kurven er tom</li>
            )}
          </ul>
          <button type="submit" disabled={basketItems.length === 0}>Betal</button>
        </form>
      </dialog>
    </div>
  )
}

export default Shop