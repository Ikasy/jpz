function Programcomp(props) {


    return (
        <div className="armbandkort programkort">
            <img src={props.src} alt={props.alt} />
            <div className="armtekst">
                <h2>{props.navn}</h2>
                <p>{props.info}</p>
            </div>
            <div className="slicediv">
                <p className="slice">{props.time}</p>
            </div>
        </div>
    )
}

export default Programcomp
