import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './Home';
import About from "./About";
import Contact from "./Contact";
import Product from "./Product";

function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
         <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>}/>


            <Route path="/products" element={<Product/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
