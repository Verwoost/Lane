
import JoostCarousel from './components/JoostCarousel';
import SzymonCarousel from './components/SzymonCarousel/SzymonCarousel';
import styled from 'styled-components';

const genresPlaceholder = [
  {
    "id": 18,
    "name": "Drama",
  },
  {
    "id": 10749,
    "name": "Romance",
  },
  {
    "id": 35,
    "name": "Comedy",
  }
]

const PlaceHolder = styled.div`
width: 300px;
height: 300px;
font-size: 1px;
background-color: grey;
font-weight: bold;
color: white;

`;



function App() {


  return (
    <div className="App">
      <div>
      {/* <JoostCarousel></JoostCarousel> */}
      
      {genresPlaceholder.map(genre =>{
      console.log(genre)
      return (
        <SzymonCarousel key={genresPlaceholder.indexOf(genre)} genre={genre}/>)
      })}
      </div>
    </div>
  )
}

export default App
