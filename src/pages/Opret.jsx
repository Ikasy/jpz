import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'; // Import your Firebase configuration
import { useNavigate } from 'react-router-dom';
import logo from "../assets/logo.svg"
import Swal from 'sweetalert2'


export default function Opret() {
  const [fornavn, setFornavn] = useState('');
  const [efternavn, setEfternavn] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobilnummer, setMobilnummer] = useState('');
  const [fodselsdag, setFodselsdag] = useState('');
  const [klub, setKlub] = useState(false);
  const [status, setStatus] = useState('');

  const navigate = useNavigate();

  const handleSignup = async (e) => {

    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // User successfully created
      console.log('User created successfully!');

      // Define your key. Here we're using the email as an example.
      const key = email.replace('.', '_'); // Ensure the key is Firebase-compatible.
      const url = `https://jyllandsparkzoo-b84ba-default-rtdb.europe-west1.firebasedatabase.app/bruger/${key}.json`;

      const formData = {
        fornavn: fornavn,
        efternavn: efternavn,
        email: key,
        password: password,
        mobilnummer: mobilnummer,
        fodselsdag: fodselsdag,
        klub: klub
      };

      fetch(url, {
        method: 'PUT', // Use PUT to set the data at the specified key
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Fejl ved opretning af bruger');
          }
          setStatus('Bruger oprettet.');
          // console.log('Formulardata gemt i Firebase Realtime Database.');
        })
        .catch((error) => {
          setStatus('Fejl ved opretning', error);
          // console.error('Fejl ved gemning af fomulardata', error);       
        });

      localStorage.setItem('user', key);

      Swal.fire({
        title: "Oprettelse succesfuld!",
        text: "Tak for din oprettelse af en profil til Jylland Park Zoo! Vi glæder os til at byde dig velkommen til en verden af fantastiske dyreoplevelser og spændende aktiviteter hele året rundt.",
        icon: "success",
        color: "#013D19",
        background: "#FCFAEE",
        allowOutsideClick: false,
        confirmButtonText: "Forsæt til profil",
        buttonsStyling: false,
        iconColor: "#013D19"
      }).then(() => {
        navigate("/profil");
      });

    } catch (error) {
      // Handle error (e.g., display an error message)
      if (error.message.indexOf("email-already-in-use") > -1) {
        setStatus("Du er allerede oprettet!");
      } else {
        setStatus("Din oprettelse slog fejl, makker!");
      }
      console.error('Error creating user:', error.message);
    }
  };


  return (
    <div className="logside">
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>

      <div className="formular">
        <h1>Opret bruger</h1>
        <p className="ux">{status}</p>
        <form onSubmit={handleSignup}>
          <label htmlFor="fornavn">Fornavn</label>
          <input
            id='fornavn'
            type="fornavn"
            name="fornavn"
            placeholder="John"
            value={fornavn}
            onChange={(e) => setFornavn(e.target.value)}
            required
          />
          <label htmlFor="efternavn">Efternavn</label>
          <input
            id='efternavn'
            type="efternavn"
            name="efternavn"
            placeholder="Doe"
            value={efternavn}
            onChange={(e) => setEfternavn(e.target.value)}
            required
          />
          <label htmlFor="email">E-mail</label>
          <input
            id='email'
            type="email"
            name="email"
            placeholder="Din mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="password">Kodeord</label>
          <input
            id='password'
            type="password"
            name="password"
            placeholder="Dit password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="mobil">Mobilnummer</label>
          <input
            id='mobil'
            type="tel"
            name="mobil"
            placeholder="Dit Mobilnummer"
            value={mobilnummer}
            onChange={(e) => setMobilnummer(e.target.value)}
            required
          />
          <label htmlFor="fodselsdag">Fødselsdag</label>
          <input
            id='fodselsdag'
            type="date"
            name="fodselsdag"
            placeholder="Fødselsdag"
            value={fodselsdag}
            onChange={(e) => setFodselsdag(e.target.value)}
            required
          />
          <div className='checkbox'>
            <input
              id='vilkar'
              type="checkbox"
              name="vilkar"
              placeholder="Accepter gældende vilkår"
              required
            />
            <label htmlFor="vilkar">Accepter gældende vilkår</label>
          </div>
          <div className='checkbox'>
            <input
              id='klub'
              type="checkbox"
              name="klub"
              placeholder="Bliv medlem af kundeklub"
              onChange={(e) => setKlub(e.target.checked)}
            />
            <label htmlFor="klub">Bliv medlem af kundeklub</label>
          </div>
          <button className='morkknap opretbrugerknap' type="submit">Opret bruger</button>
        </form>
        <img className="logosymbol" src={logo} alt="Jyllands park zoo logo" />

      </div>
    </div>
  );
}