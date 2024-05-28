function Rektangel(props) {

  return (
    <div className="rekt" style={{ backgroundColor: props.farve, borderRadius: props.br}}>
      <img src={props.src} alt={props.alt} />
      <div>
        <h2>{props.tekst}</h2>
        <h2>{props.tekst2}</h2>
      </div>
      <img style={{ width: props.w }} src={props.src2} alt={props.alt2} />
    </div>
  )
}

export default Rektangel