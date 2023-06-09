import "./FavoriteItem.css";

const FavoriteItem = ({ wishListItem, miniTop, mini }) => {
  const { name, photo, price } = wishListItem;

  function numberWithCommas(x) {
    x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return x.toFixed(2);
  }

  return (
    <div className={`favorite ${miniTop}`} id={mini}>
      <img src={photo} alt={name} />
      <p className="title">{name}</p>
      <p className="price">₱{numberWithCommas(price)}</p>
    </div>
  );
};

export default FavoriteItem;
