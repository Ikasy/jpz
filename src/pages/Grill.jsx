
// function Grill() {

//   return (
//     <>
//     </>
//   )
// }

// export default Grill
// App.js
import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import aarskort from '../assets/aarskort.svg';

const App = () => {
  const [basketItems, setBasketItems] = useState([]);

  function addToBasket(item) {
      // Generate a unique key for the item
      const uniqueKey = `basket_item_${new Date().getTime()}`;

      // Convert the item to a JSON string and save it in session storage
      sessionStorage.setItem(uniqueKey, JSON.stringify(item));
      console.log(`Item added to basket: ${JSON.stringify(item)}`);

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
    
  
  // Function to retrieve all items from the basket
  

  async function showSweetAlert() {
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
        const user = {
          navn: navn,
          alder: alder,
          email: "john.doe@example.com"
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

        // setBasketItems(getBasketItems());
        // console.log(basketItems);

      }
    } catch (error) {
      Swal.fire('Fejl!', 'Der opstod en fejl ved gemning af data.', 'error');
      console.log(error);
    }
  }
  
useEffect(() => {
  const items = getBasketItems();
  console.log(`Basket items on component mount: ${JSON.stringify(items)}`);
  setBasketItems(items);
}, []);

  return (
    <div>
      <button onClick={showSweetAlert}>Vis Modal</button>
      <ul>
        {basketItems.map((item, index) => (
          <li key={index}>{item.navn} - {item.alder}</li>
        ))}
      </ul>
    </div>

  );
};

export default App;
