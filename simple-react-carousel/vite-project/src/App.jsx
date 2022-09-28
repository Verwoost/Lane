import JoostCarousel from "./components/JoostCarousel";
import SzimonCarousel from "./components/SzimonCarousel";
import styled from "styled-components";

function App() {
  return (
    <div className="App">
      <div>
        <JoostCarousel></JoostCarousel>
        <SzimonCarousel></SzimonCarousel>
      </div>
    </div>
  );
}

export default App;
