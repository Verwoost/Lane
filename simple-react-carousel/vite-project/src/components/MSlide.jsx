import React from "react";
import styled from "styled-components";
import { useEffect } from "react";

const MySlide = styled.div`
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

const TestDiv = styled.div`
  height: ${(props) => props.setheight};
  width: ${(props) => props.setwidth};
  position: absolute;
  top: 0;
  left: 0;
  background-color: tomato;
  border: 1px solid black;
`;

export default function MSlide(props) {
  function getItems() {
    const items = props.list.map((item, index) => {
      return (
        <SlideInner>
          <TestDiv
            setwidth={props.imageWidth}
            setHeight={props.imageHeight}
          ></TestDiv>
        </SlideInner>
      );
    });

    return items;
  }

  return <MySlide>{getItems()}</MySlide>;
}
