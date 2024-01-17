import { useEffect } from "react";
import About from "./components/About/About"
import Showblog from "./components/About/Showblog"
import Content from "./components/Content/Content"
import Navbar from "./components/navbar/Navbar"
import Footer from "./components/Footer/Footer";

function App  ()  {
  
  return (
    <div className="bg-[#1f222a] font-inter min-h-screen m-0 p-0  text-white">
      <Navbar />
      <Content />
      <About />
      <Footer />
    </div>
  )
}

export default App