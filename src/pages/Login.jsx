import { useState } from 'react'
import { auth } from '../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import logotekst from "../assets/logomedtekst.svg"
// link til firebase: https://baeredygtig-webdesign-default-rtdb.europe-west1.firebasedatabase.app/
function Login() {
// definere tilstande for email, password og status 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState('');

// bruges til at navigere til forskellige URL'er
  const navigate = useNavigate();

  // funktion, der kaldes ved indsendelse af formularen. 
  async function handleSubmit(e) {
    e.preventDefault(); // Forhindrer standardadfærd for formularen
    
    try { // Log ind med email og password ved hjælp af Firebase Authentication
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);

       // Hvis login er vellykket, gem brugerens email i sessionStorage
      const user = userCredential.user;
      const emailWithUnderscore = user.email.replace('.', '_'); // Erstat punktummer med underscores
      localStorage.setItem('user', emailWithUnderscore);
      navigate("/profil");
    
    } catch (error) {
       // Hvis der opstår en fejl under login, vis en fejlmeddelelse til brugeren
      console.error(error);
      setStatus("*Hovsa! Brugernavn og password stemmer ikke overens.")
    }
  }

  // Render metoden returnerer HTML-strukturen for login siden
  return (
    <div className="logside">
      <p className="tilbageknap" onClick={() => navigate(-1)}>Tilbage</p>

      <div className="formular">
        <h1>Log ind</h1>
      <p className="ux">{status}</p>
        <form onSubmit={handleSubmit}>
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
          <p style={{textAlign:"right"}}><u>Glemt adgangskode?</u></p>
          <button className='morkknap' type="submit">Log ind</button>
        </form>
      <img className="logosymbol" src={logotekst} alt="Jyllands park zoo logo" />

      </div>
    </div>
  )
}
export default Login