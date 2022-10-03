import SzymonCarousel from "./components/SzymonCarousel";
import Lane from "./components/Lane";
import LaneMultiple from "./components/LaneMultiple";

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



const slides = [
  {
    title: "Slide #1",
    content: () => <p>You can add any type of content here!</p>,
  },
  {
    title: "Slide #2 (wrapped in a div)",
    content: () => {
      return (
        <div className="customSlide">
          <h3>2</h3>
          <p>I'm just another slide</p>
          <p>
            Wrapped in a <code>div</code>!
          </p>
        </div>
      );
    },
  },
  {
    content: () => (
      <div className="withImage">
        <img
          src="https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"
          width="200px"
        ></img>
        <img
          src="https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"
          width="200px"
        ></img>
        <img
          src="https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"
          width="200px"
        ></img>
        <img
          src="https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"
          width="200px"
        ></img>
        <img
          src="https://image.tmdb.org/t/p/original/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg"
          width="200px"
        ></img>
      </div>
    ),
  },
  {
    title: "Slide #4",
    content: () => (
      <div>
        <h2>Style me!</h2> <small>...in any way you please</small>
      </div>
    ),
  },
  {
    title: "Slide #5",
    content: () => <h3>I'm the final slide...</h3>,
  },
];

function App() {
  return (
    <div className="App">
      <div>
        {/* <Lane slides={slides}></Lane> */}
        <LaneMultiple slides={slides}></LaneMultiple>
        
        {genresPlaceholder.map(genre =>{
      console.log(genre)
      return (
        <SzymonCarousel key={genresPlaceholder.indexOf(genre)} genre={genre}/>)
      })}
      </div>
    </div>
  );
}

export default App;
