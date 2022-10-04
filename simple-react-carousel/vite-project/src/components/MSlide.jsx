import React, { useState } from "react";
import styled from "styled-components";

const TestDiv = styled.div`
  display: flex;
  height: ${(props) => props.setheight};
  width: ${(props) => props.setwidth};
  position: relative;
  top: 0;
  left: 0;
  background-color: tomato;
`;

const TestTitle = styled.p`
  position: absolute;
  left: 0;
  top: 0;
  color: white;
  padding: 1rem;
`;

export default function MSlide(props) {
  return (
    <TestDiv setwidth={props.imageWidth} setheight={props.imageHeight}>
      <TestTitle>{props.title}</TestTitle>
      {props.list.map((item, index) => {
        return (
          <img
            src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
            width={props.imageWidth}
          ></img>
        );
      })}
    </TestDiv>
  );
}
