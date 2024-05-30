function ShopEl(props) {

    return (
    <div className="shop" onClick={props.open}>
        <h2>{props.navn}</h2>
        <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default ShopEl