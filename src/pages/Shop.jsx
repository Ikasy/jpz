import { Link, Navigate, useNavigate } from "react-router-dom"
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
let test = true;
const [basketItems, setBasketItems] = useState([]);

function addToBasket(item) {
    // Generate a unique key for the item
    const uniqueKey = `basket_item_${new Date().getTime()}`;

    // Convert the item to a JSON string and save it in session storage
    sessionStorage.setItem(uniqueKey, JSON.stringify({ key: uniqueKey, item: item }));
    console.log(`Item added to basket: ${JSON.stringify(item)}`);

}
async function slet(key) {
  sessionStorage.removeItem(key);
  console.log(`Element fjernet fra session storage med nøgle: ${key}`);
}

function removeFromBasket(key) {
  sessionStorage.removeItem(key);
  console.log(`Element removed from session storage with key: ${key}`);
  // Update basket items state after removal
  const updatedItems = getBasketItems();
  setBasketItems(updatedItems);
}
function getBasketItems() {
  const items = [];
  console.log("Fetching basket items from session storage...");

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
      const { navn, alder } = formValues; // Destructuring to get navn and alder from formValues
      
      var currentTime = new Date().getTime();
      var oneYearFromNow = currentTime + (365 * 24 * 60 * 60 * 1000);
    
      // Convert timestamp to Date objects
      var currentDate = new Date(currentTime);
      var dateOneYearFromNow = new Date(oneYearFromNow);
    
      // Format the dates as strings
      var formattedNowDate = currentDate.toLocaleDateString();
      var formattedYearDate = dateOneYearFromNow.toLocaleDateString();
    
      console.log(formattedNowDate);
      console.log(formattedYearDate);

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
      })
      const updatedItems = getBasketItems();
      console.log(`Updated basket items: ${JSON.stringify(updatedItems)}`);
      setBasketItems(updatedItems);

    }
  } catch (error) {
    Swal.fire('Fejl!', 'Der opstod en fejl ved gemning af data.', 'error');
    console.log(error);
  }
}

function removeItem(key) {
  console.log('Before removal:', key);
  sessionStorage.removeItem(key);
  console.log('After removal:', key);
  console.log(sessionStorage);
}

async function showKurv() {
  try {
    const updatedItems = getBasketItems();
    setBasketItems(updatedItems);
      await Swal.fire({
      title: 'Indkøbskurv',
      html: generateBasketListHtml(updatedItems),
      focusConfirm: false, 
      showCancelButton: true,
      confirmButtonText: 'Betal',
      cancelButtonText: 'Annuller',
      reverseButtons: true,
      buttonsStyling: false,
      background: '#FCFAEE',
      customClass: {
        cancelButton: 'outlineknap' // Tilføj din klasse her
      },
      
      preConfirm: () => {
        
      }
    });

    if (test) {
      // const user = {
      //   navn: navn,
      //   alder: alder,
      //   email: "john.doe@example.com"
      // };
    
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
      })
    }
  } catch (error) {
    Swal.fire('Fejl!', 'Der opstod en fejl ved gemning af data.', 'error');
    console.log(error);
  }
}



// Function to generate HTML for basket list dynamically
function generateBasketListHtml(items) {
  if (items.length === 0) {
    return '<p>Indkøbskurven er tom.</p>';
  }

  // Generate HTML for each item in the basket
  const itemListHtml = items.map((item, index) => (
    `<li key=${index}>${item.item.navn} - ${item.item.type} <img onclick="sessionStorage.removeItem('${item.key}'); showKurv()" src="${skrald}" alt="Slet"/></li>`
  )).join('');

  return `<ul>${itemListHtml}</ul>`;
}

useEffect(() => {
const items = getBasketItems();
console.log(`Basket items on component mount: ${JSON.stringify(items)}`);
setBasketItems(items);


}, []);

  return (
    <div className="shopside">
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>
      <img onClick={showKurv} style={{position:"absolute",right: "2vh", top:"0.8vh", height:"4vh"}} src={kurv} alt="Åben Kurven" />
      <h1 style={{marginTop:"1vh", textAlign:"center"}}>Shop</h1>
      
        <ShopEl
          navn= "KØB ÅRSKORT"
          src={aarskort}
          alt="Årskort visuelisation"
          open={showAarskort}
        />
      

      <Link>
        <ShopEl
          navn= "KØB ENTRÉ"
          src={billet}
          alt="Billet visuelisation"
        />
      </Link>

      <Link>
        <ShopEl
          navn= "LEJE AF ARMBÅND"
          src={armband}
          alt="Hånd med et armbånd"
        />
      </Link>

      <Link>
        <ShopEl
          navn= "KØB TURKORT"
          src={turkort}
          alt="Billede af turkort"
        />
      </Link>
    </div>
  )
}

export default Shop