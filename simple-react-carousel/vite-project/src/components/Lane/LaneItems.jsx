import styled from "styled-components";

const Container = styled.div`
  display: flex;
  /* height: ${(props) => props.setheight}; */
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
  background-color: transparent;
`;

const Title = styled.p`
  position: absolute;
  left: 0;
  bottom: 0;
  color: white;
  padding: 1rem;
`;

const SlideImg = styled.img`
  padding-inline: 2px;
  border-radius: 0.3vw;
`;

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
          </Container>
        );
      })}
    </Container>
  );
}
