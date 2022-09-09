import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingCCCB from "./components/LandingCCCB/LandingCCCB";
import "./App.scss";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingCCCB />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
