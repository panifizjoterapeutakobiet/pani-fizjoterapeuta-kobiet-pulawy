import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SEOHead from "./components/SEOHead";

function App() {
  return (
    <div className="App">
      <SEOHead />
      <BrowserRouter basename="/panifizjoterapeutakobietpulawy">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
