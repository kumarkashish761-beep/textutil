import "./App.css";
import Navbar from "./Components/Navbar";
import Textform from "./Components/Textform";
import Alert from "./Components/Alert";
// import About from "./Components/About";
// import Contact from "./Components/Contact";
import { useState } from "react";

function App() {
  const [mystyle, setstyle] = useState({ backgroundColor: "#f1f5f9" });
  const [Btntext, settext] = useState("dark mode");
  const [alert, setalert] = useState(null);

  const Setalert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 3000);
  };

  const togglestyle = () => {
    if (mystyle.backgroundColor === "#f1f5f9") {
      setstyle({
        backgroundColor: "black",
        color: "white",
      });
      settext("light mode");
      Setalert("Dark mode On", "success");
    } else {
      setstyle({
        backgroundColor: "#f1f5f9",
        color: "black",
      });
      settext("dark mode");
      Setalert("Light mode On", "success");
    }
  };

  return (
    <>
      <div className="container" style={mystyle}>
        <Navbar togglemode={togglestyle} btntext={Btntext} setalert={Setalert} />
        
        <Alert alert={alert} />

        {/* Direct rendering (no routing) */}
        <Textform setalert={Setalert} />
        {/* <About />
        <Contact /> */}
      </div>
    </>
  );
}

export default App;