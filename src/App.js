import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <Routes>
        <Navbar />
        <Route path="/" element={ <HomePage /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
    </div>
  );
}

export default App;
