import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './component/Header';
import Home from './Home';
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <div className="App">
      <Router>
         <Header/>
         <Routes>
            <Route path='/' element= {<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;
