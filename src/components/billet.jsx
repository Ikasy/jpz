import stregkode from "../assets/Stregkode.svg"
import logo from "../assets/Logo.svg"
import bgb from "../assets/billet.svg"

import { useEffect, useState } from "react";
function Billet(props) {
    const [type, setType] = useState("");
    const [bgbs, setBgb] = useState("");

    useEffect(() => {
        async function switchType() {
            if (props.type == "arskort") {
                setType("Årskort");

            } else {
                setType("Billet");
                setBgb(bgb);
            }
        }
        switchType();
    }, [])

    return (
        <div
            className={`billet ${type === "Billet" ? 'billet-billede' : ''}`}
            style={type === "Billet" ? { backgroundImage: `url(${bgbs})` } : {}}>
            <div className="billetinfo">
                <img className="logobillet" src={logo} alt="Logo til jyllands park zoo" />
                <div className="billettekst">
                    <h3>{type}</h3>
                    <p>Navn: {props.navn}</p>
                    <p>Udløbsdato: {props.udlob}</p>
                </div>
            </div>
            <img className="stregkode" src={stregkode} alt="Stregkode til billetten" />
        </div>
    )
}

export default Billet