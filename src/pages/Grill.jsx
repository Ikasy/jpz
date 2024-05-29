
// function Grill() {

//   return (
//     <>
//     </>
//   )
// }

// export default Grill
// App.js
import React from 'react';
import Swal from 'sweetalert2';
import { db } from '../firebase-config';

const App = () => {
   async function showModal() {
    const { value: formValues } = await Swal.fire({
      title: 'Indtast information',
      html:
        `<input id="swal-input1" class="swal2-input" placeholder="Navn">` +
        `<select id="swal-input2" class="swal2-input">
          <option value="barn">Barn</option>
          <option value="voksen">Voksen</option>
          <option value="senior">Senior</option>
         </select>`,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById('swal-input1').value,
          document.getElementById('swal-input2').value
        ];
      }
    });

    if (formValues) {
      const [navn, kategori] = formValues;
      try {
        await db.collection('users').add({
          navn,
          kategori
        });
        Swal.fire('Succes!', 'Data er gemt.', 'success');
      } catch (error) {
        Swal.fire('Fejl!', 'Der opstod en fejl ved gemning af data.', 'error');
      }
    }
  };

  return (
    <div>
      <button onClick={showModal}>Vis Modal</button>
    </div>
  );
};

export default App;
