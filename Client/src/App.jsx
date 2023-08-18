import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Blogs from './pages/Blogs';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/login" element= {<Login/>} />
      <Route path="/my-blogs" element= {<Blogs />} />
      <Route path="/register" element= {<Register/>} />
    </Routes>
    </>
  );
};

export default App;
