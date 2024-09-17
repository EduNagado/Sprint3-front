import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Ajuda from "./pages/Ajuda";
import Chatbot from "./pages/ChatBot";
import Login from "./pages/Login";
import Parcerias from "./pages/Parcerias";
import Sobre from "./pages/Sobre";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home/>} />
        <Route path="/ajuda" element={<Ajuda />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/parcerias" element={<Parcerias />} />
        <Route path="/sobre" element={<Sobre />} />
      </Routes>
    </Router>
  );
}

export default App;
