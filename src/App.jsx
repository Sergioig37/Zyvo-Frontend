import {Navbar} from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./pages/Home";

function App() {

  return (
    <>
    <NavBar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes> 
      </BrowserRouter>
      
    </>
  );
}

export default App;
