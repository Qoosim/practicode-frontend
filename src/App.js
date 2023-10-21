// import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import WhyUs from "./components/Why-us/Why-us";

function App() {
  return (
    <div>
      <WhyUs />
      {/* <Routes>
        <Navbar />
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes> */}
    </div>
  );
}

export default App;
