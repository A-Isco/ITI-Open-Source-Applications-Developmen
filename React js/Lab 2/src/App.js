import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./Components/Pages/About";
import Error from "./Components/Pages/Error";
import Home from "./Components/Home/Home";
import NavBAr from "./Components/NavBar";
import StudentDetails from "./Components/Pages/StudentDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBAr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student/:id/:name" element={<StudentDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
