import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Armband from './pages/Armband'
import Betaling from './pages/Betaling'
import Cafemenu from './pages/Cafemenu'
import Forside from './pages/Forside'
import Grill from './pages/Grill'
import Info from './pages/Info'
import Kort from './pages/Kort'
import Login from './pages/Login'
import Mad from './pages/Mad'
import Opret from './pages/Opret'
import Profil from './pages/Profil'
import Program from './pages/Program'
import Shop from './pages/Shop'
import Skattejagt from './pages/Skattejagt'
import Start from './pages/Start'
import Tilfojarmband from './pages/Tilfojarmband'
import Nav from './components/Nav'

function App() {

  return (
    <>
      
      <main>
        <Routes>
          <Route path="/" element={<Forside />}></Route>
          <Route path="/kort" element={< Kort/>}></Route>
          <Route path="/armband" element={<Armband />}></Route>
          <Route path="/profil" element={<Profil />}></Route>
          <Route path="/info" element={<Info />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/program" element={<Program />}></Route>
          <Route path="/skattejagt" element={<Skattejagt />}></Route>
          <Route path="/mad" element={<Mad />}></Route>
          <Route path="/cafemenu" element={<Cafemenu />}></Route>
          <Route path="/grill" element={<Grill/>}></Route>
          <Route path="/betaling" element={<Betaling />}></Route>
          <Route path="/tilfojarmband" element={<Tilfojarmband />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/opret" element={<Opret />}></Route>
          <Route path="/start" element={<Start />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </main>
      <Nav></Nav>
    </>
  )
}

export default App
