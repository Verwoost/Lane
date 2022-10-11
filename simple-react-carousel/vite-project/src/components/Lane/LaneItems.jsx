import styled from "styled-components";

import logo from "../../assets/n_logo.ico";

const Container = styled.div`
  display: flex;
  /* height: ${(props) => props.setheight}; */
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: black;
  img:nth-of-type(2) {
    position: absolute;
    top: 8px;
    left: 3px;
    width: 1.3vw;
  }
`;

const Title = styled.p`
  position: absolute;
  width: 100%;
  padding: 0 5px;
  bottom: 7px;

  font-family: Futura;
  text-align: center;
  line-height: 0.9;
  font-weight: bold;
  color: white;
  z-index: 10;
  text-shadow: 2px 2px 2px rgb(0, 0, 0, 0.75);
`;

const SlideImg = styled.img`
  padding-inline: 2px;
  border-radius: 4px;
  cursor: pointer;
`;

const logoArray = [logo, null];

function showLogo() {
  return logoArray[Math.floor(Math.random() * logoArray.length)];
}

export default function LaneItems(props) {
  return (
    <Container setheight={props.imageHeight}>
      {props.list.map((item, index) => {
        return (
          <Container>
            <Title>{item.title}</Title>
            <SlideImg
              src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
              width={props.imageWidth}
              height={props.imageHeight}
            ></SlideImg>
            <img src={showLogo(logoArray)}></img>
          </Container>
        );
      })}
    </Container>
  );
}
