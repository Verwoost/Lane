import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import MSlide from "./MSlide";

const TestDiv = styled.div`
  height: ${(props) => props.setheight};
  width: ${(props) => props.setwidth};
  background-color: tomato;
  border: 1px solid black;
`;

const TestWrapper = styled.div`
  display: flex;
`;

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

const ScrollLeftButton = styled.button`
  /* child of LaneContainer */
  position: absolute;
  top: 50%;
  left: 6px;
  margin-top: -10px;
  z-index: 10;
  font-size: 0.7em;
  background: white;
  padding: 4px 6px;
  border-radius: 3px;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")};
`;

const ScrollRightButton = styled(ScrollLeftButton)`
  right: 6px;
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

export default function LaneMultiple(props) {
  const slides = props.slides;
  const slideWidth = 1000;
  const slideHeight = 200;
  const transitionSpeed = 500;
  const [visibleSlide, setVisibleSlide] = useState(1);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [stateSlides, setStateSlides] = useState(slides);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
  const [imageAmount, setImageAmount] = useState(0);
  const testArray = [];
  const screenWidth = document.getElementById("root").clientWidth;

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
      console.log("3.5");
      setImageAmount(3);
    }
    if (screenWidth < 1100 && window.innerWidth > 800) {
      console.log("4.5");
      setImageAmount(4);
    }
    if (screenWidth > 1100) {
      console.log("5.5");
      setImageAmount(6);
    }
    console.log(screenWidth);
    console.log(stateSlides.length);
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

  //   const slideDimensionStyles = () => {
  //     return { width: slideWidth + "px", height: (9 / 16) * slideHeight + "px" };
  //   };

  const slideDimensionStyles = () => {
    return { width: screenWidth + "px", height: (9 / 16) * slideHeight + "px" };
  };

  const imageDimensionStyles = () => {
    return {
      width: screenWidth / slidesAmount + "px",
      height: (9 / 16) * slideHeight + "px",
    };
  };

  const getImages = () => {
    for (let i = 0; i < imageAmount; i++) {
      testArray.push("1");
    }
    return testArray;
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
          Left
        </ScrollLeftButton>
        <ScrollRightButton
          onClick={!leftAndRightDisabled ? scrollRight : null}
          disabled={leftAndRightDisabled}
        >
          Right
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
                <SlideInner>{slide.content()}</SlideInner>
              </Slide>
            );
          })}
        </Slides>
      </LaneContainer>
      <TestWrapper>
        {getImages().map((slide, index) => {
          return (
            <TestDiv
              key={index}
              setwidth={screenWidth / imageAmount + "px"}
              setheight={(9 / 16) * slideHeight + "px"}
            >
              {index + 1}
            </TestDiv>
          );
        })}
      </TestWrapper>
    </div>
  );
}
