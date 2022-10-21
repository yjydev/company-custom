import "./App.css";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";
import Start from "./Wonik/Start";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Start />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
