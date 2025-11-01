import { Route , Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import About from "./pages/About";
import Layout from "./Layout/Layout";
import Cart from "./features/Card/Cards.jsx";
import Aboutman from "./pages/Aboutman";
import Login from "./features/Auth/Login";
import Aboutkids from "./pages/Aboutkids";
import Aboutwomen from "./pages/Aboutwomen";
import Notfount from "./components/Notfound.jsx" 
import Register from "./features/Auth/Register";


function App() {

  return (
    <>
          <Routes>
                <Route path="/" element={<Layout><Home/></Layout>}/>
                <Route path="/newarrival" element={<Layout><About/></Layout>}/>
                <Route path="/aboutmen" element={<Layout><Aboutman/></Layout>} />
                <Route path="/aboutwomen" element={<Layout><Aboutwomen/></Layout>} />
                <Route path="/aboutkids" element={<Layout><Aboutkids/></Layout>} />
                <Route path="/cart" element={<Layout><Cart/></Layout>} />
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="*" element={<Notfount/>}/>
          </Routes>
    </>
  )
}

export default App
