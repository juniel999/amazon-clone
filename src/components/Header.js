import SearchIcon from "@material-ui/icons/Search";
import "../styles/Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

const Header = () => {
  return (
    <div className="header">
      <div className="header_logo">
        <img
          className="amazon-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="amazon logo"
        ></img>
      </div>

      <div className="header_search">
        <input className="header_input_search" type="text"></input>
        <SearchIcon className="search_icon" />
      </div>

      <div className="header_nav">
        <div className="header_options">
          <span className="header_option1">Hello Guest</span>
          <span className="header_option2">Sign in</span>
        </div>

        <div className="header_options">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Orders</span>
        </div>
        <div className="header_options">
          <span className="header_option1">Your</span>
          <span className="header_option2">Prime</span>
        </div>
        <div className="header_basket">
          <ShoppingBasketIcon className="shopping_icon" />
          <p className="order_count">0</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
