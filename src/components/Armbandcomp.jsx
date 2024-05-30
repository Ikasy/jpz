import { useEffect, useState } from "react";
import blyant from "../assets/blyant.svg";
import Swal from "sweetalert2";
import mobilpay from "../assets/mobilepay.png";


function Armbandcomp(props) {

  const [color,setColor]=useState("");
  const [type,setType]=useState("");
  const [saldo,setSaldo]=useState("");
  
  // farve
  useEffect(() => {
      async function switchColor (){
          if(props.farve == "red"){
              setColor( "#d84f52bf");
          
          } else if (props.farve == "blue"){
            setColor( "#4f94c6bf");
              
          }else if (props.farve == "orange"){
            setColor( "#f99319bf");
              
          }else if (props.farve == "green"){
            setColor( "#4e722cbf");
              
          }
      }
      switchColor();
  },[])

  useEffect(() => {
    async function switchType (){
        if(props.type == "primar"){
            setType( "Primære");
        
        } else if (props.type == "sekundar"){
          setType( "Sekundær");
            
        }
    }
    switchType();
},[])

    return (
      <div className="armbandkort" style={{ backgroundColor: `${color}`}}>
        <div className="armtekst">
            <h2>Kaldenavn: {props.navn} <img src={blyant} alt="Rediger oplysninger" /></h2>
            <p>Saldo: {props.saldo}</p>
        </div>
        <div className="slicediv">
            <p className="slice" style={{ color: `${color}`}}>{type}</p>
            <button onClick={props.AabnDialog} >Tank Op</button>
        </div>
      </div>
    )
  }
  
  export default Armbandcomp
  