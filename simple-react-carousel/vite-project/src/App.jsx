import JoostCarousel from './components/JoostCarousel';
import SzimonCarousel from './components/SzimonCarousel';
import styled from 'styled-components';



const PlaceHolder = styled.div`
width: 300px;
height: 300px;
font-size: 1rem;
background-color: grey;
font-weight: bold;
color: white;

`;



function App() {


  return (
    <div className="App">
      <div>
      <JoostCarousel></JoostCarousel>
      <SzimonCarousel></SzimonCarousel>
      </div>
       
    </div>
  )
}

export default App
