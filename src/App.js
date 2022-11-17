import Footer from "./components/Footer";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import Navbar from "./components/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from "./components/Home";
import Error from "./components/Error";

function App() {
  return (
    <div className="App font-poppins min-h-screen relative pb-20">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/screen1" element={<Screen1/>} />
          <Route path="/screen2" element={<Screen2/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
