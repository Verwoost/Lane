import styled from "styled-components";

const TestDiv = styled.div`
  display: flex;
  height: ${(props) => props.setheight};
  width: 100%;
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
    <TestDiv setheight={props.imageHeight}>
      {props.list.map((item, index) => {
        return (
          <TestDiv>
            <TestTitle>{item.title}</TestTitle>
            <img
              src={"https://image.tmdb.org/t/p/original" + item.backdrop_path}
              width={props.imageWidth}
              height={props.imageHeight}
            ></img>
          </TestDiv>
        );
      })}
    </TestDiv>
  );
}
