import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import "./index.css";
import Main from "./component/Main";
import Footer from "./component/Footer";
import Skillset from "./component/Skillset";
import About from "./component/About";
import ScrollAnimation from "./component/ScrollAnimation";
import Contactus from "./component/Contactus";
import BacktoTop from "./component/BacktoTop";
import Resume from "./component/Resume";

function App() {
  ScrollAnimation(".scroll-animation", "scale-up");

  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const pathname = window.location.pathname;
    setIsNotFound(pathname !== "/" && pathname !== "/#");
  }, []);

  return (
    <div>
      {isNotFound ? (
        <div className="flex items-center justify-center min-h-screen py-8">
          <div className="max-w-md text-center">
            <h1 className="text-3xl font-bold mb-4">404: Page Not Found</h1>
            <p className="text-gray-700">
              The page you requested could not be found.
            </p>
            <button className="m-4 mt-[50px]">
              <a
                href="/"
                className="cursor-pointer hover:text-[white] p-4 px-8 border-2 border-black-500 rounded-full hover:font-[400] "
              >
                Return to Our site
              </a>
            </button>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <main>
            <Main />
            <About />
            <Skillset />
            <Resume />
            <Contactus />
          </main>
          <BacktoTop />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
