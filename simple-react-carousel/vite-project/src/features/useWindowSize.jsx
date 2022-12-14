import { useState, useEffect } from "react";

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: document.getElementById("root").clientWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: document.getElementById("root").clientWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    screen.orientation.addEventListener("change", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      screen.orientation.removeEventListener("change", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
