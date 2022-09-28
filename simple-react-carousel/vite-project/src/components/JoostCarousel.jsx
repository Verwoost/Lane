import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.section`
  list-style-type: none;
  display: flex;
  gap: 8px;
  margin: 0;
  padding: 0;
  width: 800px;
  height: 100px;

  overflow-x: hidden;
  background-color: black;
`;

const PlaceHolder = styled.div`
  transition: all 0.5s ease;
  //transform: translateX(-400%);
  flex-shrink: 0;
  width: 192px;
  height: 100%;
  font-size: 1rem;
  background-color: grey;
  font-weight: bold;
  color: white;
`;

export default function JoostCarousel() {
  const [itemPos, setItemPos] = useState("0");
  return (
    <div>
      <Container>
        <PlaceHolder>1</PlaceHolder>
        <PlaceHolder>2</PlaceHolder>
        <PlaceHolder>3</PlaceHolder>
        <PlaceHolder>4</PlaceHolder>
        <PlaceHolder>5</PlaceHolder>
        <PlaceHolder>6</PlaceHolder>
        <PlaceHolder>7</PlaceHolder>
        <PlaceHolder>8</PlaceHolder>
        <PlaceHolder>9</PlaceHolder>
        <PlaceHolder>10</PlaceHolder>
        <PlaceHolder>11</PlaceHolder>
        <PlaceHolder>12</PlaceHolder>
      </Container>
    </div>
  );
}
