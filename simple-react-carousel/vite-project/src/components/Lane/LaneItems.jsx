import styled from "styled-components";
import React, { useRef, useState } from "react";
import { Card } from "./Lane.styled";

const Container = styled.div`
  display: flex;
  position: relative;
  top: 0;
  left: 0;
  img:nth-of-type(2) {
    position: absolute;
    top: 8px;
    left: 3px;
    width: 1.3vw;
  }
`;

const Trigger = styled.div`
  position: absolute;
  background-color: transparent;
  border: 2px solid red;
  color: white;
  z-index: 1000;
`;

export default function LaneItems(props) {
  return (
    <Container>
      {props.list.map((item, index) => {
        return (
          <Container key={index}>
            <Card>
              <span>{item.title}</span>
              <img
                width={props.imageWidth}
                height={props.imageHeight}
                src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
                alt={item.title}
              />
            </Card>
          </Container>
        );
      })}
    </Container>
  );
}
