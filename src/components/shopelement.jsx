function ShopEl(props) {

    return (
    <div className="shop">
        <h2>{props.navn}</h2>
        <img src={props.src} alt={props.alt} />
    </div>
  )
}

export default ShopEl