import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Welcome from "./pages/Welcome/Welcome";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/join" element={<Join />}/>
      </Routes>
    </>
  );
}

export default App;
