import LaneHandler from "./components/Lane/LaneHandler";

const genresPlaceholder = [
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 35,
    name: "Comedy",
  },
];

function App() {
  return (
    <div className="App">
      <div>
        <LaneHandler></LaneHandler>
      </div>
    </div>
  );
}

export default App;
