import React from "react";
import { useState, useEffect } from "react";
import {
  LaneWrapper,
  LaneContainer,
  LaneTitle,
  SlideIndicator,
  IndicatorRect,
  ScrollLeftButton,
  ScrollRightButton,
  Slides,
  Slide,
  LeftSide,
  RightSide,
} from "./Lane.styled";
import LaneItems from "./LaneItems";
import useWindowSize from "../../features/useWindowSize";

export default function Lane(props) {
  // const slideHeight = 200;
  const transitionSpeed = 500;
  const [visibleSlide, setVisibleSlide] = useState(1);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [stateSlides, setStateSlides] = useState(props.slices);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
  const screenWidth = document.getElementById("root").clientWidth;
  const test = screenWidth * 0.9
  console.log(test)
  const screenWidth2 = screenWidth * 0.9
  console.log(screenWidth)
  console.log(screenWidth2)

  const slides = props.slices;
  const itemsPerLane = props.itemsPerLane;
  const slideHeight = (screenWidth2 / itemsPerLane) * (9 / 16);

  useEffect(() => {
    const slidesWithClones = [...slides];
    slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
    slidesWithClones.push(slidesWithClones[1]);
    setStateSlides(slidesWithClones);
  }, [slides]);

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
    return { width: screenWidth + "px", height: slideHeight + "px" };
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

  const [isHovered, setIsHovered] =
    useState(false); /*   hover state voor indicators/ left right buttons  */
  const [isScrolled, setIsScrolled] =
    useState(false); /* set opacity obv naar rechts gescrolled */

  return (
    <div>
      <SlideIndicator
        style={{
          opacity: isHovered ? "1" : "",
        }}
      >
        {stateSlides.map((slide, index) => {
          if (index === 0 || index === stateSlides.length - 1) {
            return null;
          }
          return <IndicatorRect key={index} active={dotIsActive(index)} />;
        })}
      </SlideIndicator>
      <LaneWrapper
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
      >
   <ScrollRightButton
          onClick={!leftAndRightDisabled ? scrollRight : null}
          onMouseDown={() => setIsScrolled(true)}
          disabled={leftAndRightDisabled}
          style={{
            opacity: isHovered ? "1" : "",
            color: isHovered ? "white" : "",
            backgroundColor: isHovered ? "#14141480" : "",
          }}
        >
          ❯
        </ScrollRightButton>
       
      <ScrollLeftButton
          onClick={!leftAndRightDisabled ? scrollLeft : null}
          disabled={leftAndRightDisabled}
          style={{
            zIndex: !isScrolled ? "-10" : "",
            opacity: isHovered && isScrolled ? "1" : "",
            color: isHovered ? "white" : "",
            backgroundColor: isHovered ? "#14141480" : "",
          }}
        >
          ❮
        </ScrollLeftButton>
      <LaneContainer
        className="lane_container"
        style={slideDimensionStyles()}
      >
        

        <Slides
          hasTransitionClass={hasTransitionClass}
          style={{ left: calculateLeftMargin() }}
        >
          {stateSlides.map((slide, index) => {
            return (
              <Slide key={index} style={slideDimensionStyles()}>
                <LaneItems
                  list={Array.from(slide)}
                  imageWidth={screenWidth2 / itemsPerLane + "px"}
                  imageHeight={slideHeight + "px"}
                ></LaneItems>
              </Slide>
            );
          })}
        </Slides>
      </LaneContainer>
        
      </LaneWrapper>
    </div>
  );
}
