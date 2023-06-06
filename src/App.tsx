import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import Menu from "./components/Menu";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Payment from "./components/Payment";

function App() {
  
  return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/payment" element={<Payment/>}/>
        </Routes>
      </Router>
  );
}

export default App;
