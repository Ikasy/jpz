function Lillefirkant(props) {

    return (
      <div className="firk" style={{ backgroundColor: props.farve, borderRadius: props.br, color: props.tekstfarve  }}>
        <h2>{props.tekst}</h2>
        <h2>{props.tekst2}</h2>
        <h2>{props.tekst3}</h2>
        <img style={{ position: props.pos, zIndex: props.z }} src={props.src} alt={props.alt} />
      </div>
    )
  }
  
  export default Lillefirkant