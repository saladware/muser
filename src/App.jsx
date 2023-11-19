import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import Join from "./pages/Join/Join";
import Welcome from "./pages/Welcome/Welcome";
import Main from "./pages/Main/Main";
import "./firebase"
import Profile from "./pages/Profile/Profile";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/home" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/join" element={<Join />}/>
        <Route path="/main" element={<Main />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </>
  );
}

export default App;
