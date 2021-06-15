import "../styles/App.css";
import Header from "./Header";
import Home from "./Home";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <div className="home_container">
        <div className="row">
          <Product
            productDes="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            rating={4}
            price={12.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
          />
          <Product
            productDes="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            rating={5}
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
          <Product
            productDes="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            rating={4}
            price={192.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
        </div>
        <div className="row">
          <Product
            productDes="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            rating={5}
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            productDes="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            rating={5}
            price={239.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
          />
        </div>

        <div className="row">
          <Product
            productDes="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            rating={5}
            price={1038.99}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
