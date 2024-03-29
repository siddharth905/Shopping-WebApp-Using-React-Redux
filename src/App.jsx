import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

const App = () => {
  return (
  <div>
          <div>
              <Navbar></Navbar>
          </div>
          <div>
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
            </Routes>
          </div>
        

  </div>
  );
};

export default App;
