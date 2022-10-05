import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import MSlide from "./MSlide";

const LaneContainer = styled.section`
  overflow: hidden;
  position: relative;
`;

const SlideIndicator = styled.div`
  /* child of LaneContainer */
  position: absolute;
  bottom: 0;
  width: 100%;
  z-index: 10;
  left: 0;
  background: rgba(0, 0, 0, 0.1);
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IndicatorRect = styled.div`
  /* child of SlideIndicator */
  width: 10px;
  height: 10px;
  background: ${(props) => (props.active ? "black" : "white")};
  margin: 0 5px;
  cursor: pointer;
  border-radius: 50%;
`;

const ScrollLeftButton = styled.span`
  /* child of LaneContainer */
  /* position: absolute;
  top: 50%;
  left: 6px;
  margin-top: -10px;
  z-index: 10;
  font-size: 0.7em;
  background: white;
  padding: 4px 6px;
  border-radius: 3px;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")}; */
  cursor: pointer;
  width: 3%;
  height: 100%;
  background-color: #14141440;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6vw;
  color: transparent;
  transition: font-size 70ms linear;
  &:hover {
    color: white;
    background-color: #14141480;
    font-size: 2.2vw;
  }
`;

const ScrollRightButton = styled(ScrollLeftButton)`
  right: 0;
  left: auto;
`;

const Slides = styled.div`
  /* child of Lane */
  transition: ${(props) => (props.hasTransitionClass ? "ease all 0.5s" : null)};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
`;

const Slide = styled.div`
  /* child of Slides */
  background: #dadada;
  display: flex;
  position: relative;
`;

const SlideInner = styled.div`
  /* child of Slide */
  background: #dadada;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  overflow: hidden;
  /* justify-content: center;
  align-items: center; */
  display: flex;
`;

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

export default function LaneMultiple() {
  const slideHeight = 200;
  const transitionSpeed = 500;
  const [visibleSlide, setVisibleSlide] = useState(1);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [stateSlides, setStateSlides] = useState(movies);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
  const [imageAmount, setImageAmount] = useState(0);
  const screenWidth = document.getElementById("root").clientWidth;
  const slides = [
    movies.slice(0, 6),
    movies.slice(6, 12),
    movies.slice(12, 18),
  ];

  // useEffect with an empty array as the second parameter
  // will run only once, when the component mounts
  // this makes it an ideal place to trigger this functionality
  useEffect(() => {
    const slidesWithClones = [...slides];
    slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
    slidesWithClones.push(slidesWithClones[1]);
    setStateSlides(slidesWithClones);
    if (screenWidth < 500) {
      setImageAmount(2);
    }
    if (screenWidth < 800 && window.innerWidth > 500) {
      setImageAmount(3);
    }
    if (screenWidth < 1100 && window.innerWidth > 800) {
      setImageAmount(4);
    }
    if (screenWidth > 1100) {
      setImageAmount(6);
    }
  }, []);

  // Monitor changes for the visibleSlide value and react accordingly
  // We need to loop back to the first slide when scrolling right
  // from the last slide (and vice-versa for the other direction)
  // And we also need to disable the animations (by removing the
  // transition class from the relevant element) in order to give
  // the impression that the carousel is scrolling infinitely
  // during our slide-cloning/swapping mechanism
  useEffect(() => {
    if (visibleSlide == stateSlides.length - 1) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setVisibleSlide(1);
      }, transitionSpeed);
    }

    if (visibleSlide === 1) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }

    if (visibleSlide === 0) {
      setLeftAndRightDisabled(true);
      setTimeout(() => {
        setHasTransitionClass(false);
        setVisibleSlide(stateSlides.length - 2);
      }, transitionSpeed);
    }

    if (visibleSlide == stateSlides.length - 2) {
      setTimeout(() => {
        setHasTransitionClass(true);
      }, transitionSpeed);
    }
  }, [visibleSlide]);

  // Whenever the left and right arrows are disabled
  // We want to enable them again after a specific
  // period of time, this is to prevent problematic
  // spamming of these controls during our clone
  // slide-cloning/swapping mechanism
  // Probably a better way to handle this though
  useEffect(() => {
    if (leftAndRightDisabled) {
      setTimeout(() => {
        setLeftAndRightDisabled(false);
      }, transitionSpeed * 2);
    }
  }, [leftAndRightDisabled]);

  const calculateLeftMargin = () => {
    return "-" + visibleSlide * screenWidth + "px";
  };

  const slideDimensionStyles = () => {
    return { width: screenWidth + "px", height: (9 / 16) * slideHeight + "px" };
  };

  const scrollLeft = () => {
    setVisibleSlide(visibleSlide - 1);
  };

  const scrollRight = () => {
    setVisibleSlide(visibleSlide + 1);
  };

  const dotIsActive = (index) => {
    return (
      index === visibleSlide ||
      (index === 1 && visibleSlide === stateSlides.length - 1) ||
      (index === stateSlides.length - 2 && visibleSlide === 0)
    );
  };

  return (
    <div>
      <LaneContainer style={slideDimensionStyles()}>
        <ScrollLeftButton
          onClick={!leftAndRightDisabled ? scrollLeft : null}
          disabled={leftAndRightDisabled}
        >
          ❮
        </ScrollLeftButton>
        <ScrollRightButton
          onClick={!leftAndRightDisabled ? scrollRight : null}
          disabled={leftAndRightDisabled}
        >
          ❯
        </ScrollRightButton>

        <SlideIndicator>
          {stateSlides.map((slide, index) => {
            if (index === 0 || index === stateSlides.length - 1) {
              return null;
            }
            return <IndicatorRect key={index} active={dotIsActive(index)} />;
          })}
        </SlideIndicator>

        <Slides
          hasTransitionClass={hasTransitionClass}
          style={{ left: calculateLeftMargin() }}
        >
          {stateSlides.map((slide, index) => {
            return (
              <Slide key={index} style={slideDimensionStyles()}>
                <SlideInner>
                  <MSlide
                    list={Array.from(slide)}
                    imageWidth={screenWidth / imageAmount + "px"}
                    imageHeight={(9 / 16) * slideHeight + "px"}
                  ></MSlide>
                </SlideInner>

                {/* <SlideInner></SlideInner> */}
              </Slide>
            );
          })}
        </Slides>
      </LaneContainer>
    </div>
  );
}
