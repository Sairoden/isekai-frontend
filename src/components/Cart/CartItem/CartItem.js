const CartItem = ({ cartItem, setTotalPrice }) => {
  const { name, quantity, photo, price } = cartItem;

  function numberWithCommas(x) {
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return x.toFixed(2);
  }

  return (
    <div className="items">
      <img src={photo} alt={name} className="img" />
      <div className="info">
        <div>{name}</div>
        <div>X{quantity}</div>
        <div>₱{numberWithCommas(price)}</div>
      </div>
    </div>
  );
};

export default CartItem;
