import SzymonCarousel from "./components/SzymonCarousel";
import Lane from "./components/Lane";

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
        <img src="https://justacoding.blog/wp-content/uploads/2021/10/loop.jpg"></img>
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
        <Lane slides={slides}></Lane>
        
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
