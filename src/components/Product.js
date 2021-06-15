import "../styles/Product.css";

const Product = ({ productDes, price, image, id, rating }) => {
  const stars = [...Array(rating).keys()];
  return (
    <div className="product">
      <div className="description">
        <p className="info">{productDes}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {stars.map((id) => (
            <p key={id}>⭐</p>
          ))}
        </div>
      </div>

      <div className="bot_description">
        <img className="product_img" src={image} alt="product_img"></img>

        <button className="add_to_cart">Add to cart</button>
      </div>
    </div>
  );
};

export default Product;
