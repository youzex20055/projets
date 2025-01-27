import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/navbar";
import { Shop } from "./pages/shop/shop";
import { Contact } from "./pages/contact";
import { Cart } from "./pages/cart/cart";
import { ShopContextProvider } from "./context/shop-context";
import Home from "./components/HOME"; // Corrected path
import { Shirts } from "./components/Shirts"; // Import the Shirts component
import { Accessories } from "./components/Accessories"; // Import the Accessories component
import BillingPaymentForm from "./pages/cart/Payment"; // Import the Payment component
import Search from "./pages/search/Search"; // Import the Search component

function App() {
  return (
    <div className="App">
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} /> {/* Set Home as the main page */}
            <Route path="/shop" element={<Shop />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/shirts" element={<Shirts />} /> {/* Corrected route path for Shirts */}
            <Route path="/accessories" element={<Accessories />} /> {/* Add route for Accessories */}
            <Route path="/payment" element={<BillingPaymentForm />} /> {/* Add route for Payment */}
            <Route path="/search" element={<Search />} /> {/* Add route for Search */}
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;