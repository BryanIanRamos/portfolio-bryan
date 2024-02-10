import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [rightOffset, setRightOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;
      setRightOffset(value * 2.5); // Set rightOffset directly based on scrollY
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="h-[3000px] w-screen bg-red-200 ">
        <div className="w-full h-screen bg-yellow-400 overflow-hidden relative">
          <span
            className="w-[700px] h-[180px] bg-blue-500 text-center absolute bottom-0 left-0"
            style={{ left: `${-rightOffset}px` }}
          >
            left Object
          </span>
          <span
            className="w-[700px] h-[180px] bg-green-500 text-center absolute bottom-0 right-0"
            style={{ right: `${-rightOffset}px` }}
          >
            Right Object
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
