import React from "react";
import { useState, useEffect } from "react";
import {
  LaneContainer,
  SlideIndicator,
  IndicatorRect,
  ScrollLeftButton,
  ScrollRightButton,
  Slides,
  Slide,
} from "./Lane.styled";
import LaneItems from "./LaneItems";

export default function Lane(props) {
  const slideHeight = 200;
  const transitionSpeed = 500;
  const [visibleSlide, setVisibleSlide] = useState(1);
  const [hasTransitionClass, setHasTransitionClass] = useState(true);
  const [stateSlides, setStateSlides] = useState(props.slices);
  const [leftAndRightDisabled, setLeftAndRightDisabled] = useState(false);
  const screenWidth = document.getElementById("root").clientWidth;
  const slides = props.slices;
  const itemsPerLane = props.itemsPerLane;

  useEffect(() => {
    const slidesWithClones = [...slides];
    slidesWithClones.unshift(slidesWithClones[slidesWithClones.length - 1]);
    slidesWithClones.push(slidesWithClones[1]);
    setStateSlides(slidesWithClones);
  }, []);

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
      <SlideIndicator>
        {stateSlides.map((slide, index) => {
          if (index === 0 || index === stateSlides.length - 1) {
            return null;
          }
          return <IndicatorRect key={index} active={dotIsActive(index)} />;
        })}
      </SlideIndicator>
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

        <Slides
          hasTransitionClass={hasTransitionClass}
          style={{ left: calculateLeftMargin() }}
        >
          {stateSlides.map((slide, index) => {
            return (
              <Slide key={index} style={slideDimensionStyles()}>
                <LaneItems
                  list={Array.from(slide)}
                  imageWidth={screenWidth / itemsPerLane + "px"}
                  imageHeight={(9 / 16) * slideHeight + "px"}
                ></LaneItems>
              </Slide>
            );
          })}
        </Slides>
      </LaneContainer>
    </div>
  );
}
