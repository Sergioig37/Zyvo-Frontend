import {Navbar} from "./components/Navbar";
import {BrowserRouter, Route, Routes} from "@react-router";


function App() {
  const tocar = (e) => {
    if (e.target.style.backgroundColor === "red") {
      e.target.style.backgroundColor = "blue";
    } else {
      e.target.style.backgroundColor = "red";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
