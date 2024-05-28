function Armbandcomp(props) {

    return (
      <div className="armbandkort" style={{ backgroundColor: props.farve}}>
        <div className="armtekst">
            <h2>Kaldenavn: {props.navn}</h2>
            <p>Saldo: {props.saldo}</p>
        </div>
        <div className="slicediv">
            <p className="slice" style={{ color: props.farve}}>{props.type}</p>
            <button>Tank Op</button>
        </div>
      </div>
    )
  }
  
  export default Armbandcomp
  