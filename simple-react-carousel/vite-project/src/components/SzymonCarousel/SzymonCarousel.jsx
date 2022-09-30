import React from "react";
import {
  Wrapper,
  Line,
  LineContentMask,
  LineContent,
  LineItem,
} from "./SzymonCarousel.styled";

export default function SzymonCarousel(genre) {
  
  const movies = [
    //wordt uiteindelijk doorgegeven als prop
    {
      backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
      title: "Fight Club",
      id: 550,
    },
    {
      backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
      title: "The Poseidon Adventure",
      id: 551,
    },
    {
      backdrop_path: "/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
      title: "Pane e tulipani",
      id: 552,
    },
    {
      backdrop_path: "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
      title: "Dogville",
      id: 553,
    },
    {
      backdrop_path: "/1qwXItFKqvKYyW1CwbYhxyUC8Pj.jpg",
      title: "The Cuckoo",
      id: 554,
    },
    {
      backdrop_path: "/1fJSyFhvxBjyLZsBnYs4641YXu1.jpg",
      title: "Basquiat",
      id: 549,
    },
    {
      backdrop_path: "/zyO6j74DKMWfp5snWg6Hwo0T3Mz.jpg",
      title: "Rashomon",
      id: 548,
    },
    {
      backdrop_path: "/ww9pokP6M6gp2Iu0o3sT5B7eN66.jpg",
      title: "The Horse Whisperer",
      id: 547,
    },
  ];

  return (
    <Wrapper>
      <h2>
          <a href="#">
          <div></div>
        </a>
      </h2>
      <Line>
        {/* Page index indicator */}
        {/* <ul>
          <li className='active'></li>
          <li></li> <<<<as many as there are pages
        </ul> */}
        <span className="prevButton">❮</span>
        <LineContentMask>
          <LineContent>
            {movies.map((movie) => (
              <div className="lineItem" key={movies.indexOf(movie)}>
                <img
                  src={
                    "https://image.tmdb.org/t/p/original" + movie.backdrop_path
                  }
                  alt={movie.title + " image"}
                />
              </div>
            ))}
          </LineContent>
        </LineContentMask>
        <span className="nextButton">❯</span>
      </Line>
    </Wrapper>
  );
}
