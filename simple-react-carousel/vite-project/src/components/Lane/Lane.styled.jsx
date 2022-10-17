import styled from "styled-components";

export const LaneWrapper = styled.div`
position: relative;
overflow: hidden;
width: 90vw;
margin: auto;
display: flex;
`;

export const LaneContainer = styled.section`
  // overflow-x: hidden;
  position: relative;
  width: calc(100% - 6rem);
  margin: auto;

`;

export const LaneTitle = styled.p`
  position: absolute;
  left: 60px;
  /* top: -40px; */
  z-index: 99;
  color: white;
  font-weight: bold;
`;

export const SlideIndicator = styled.div`
  /* child of LaneContainer */

  width: 90vw;
  margin: 0 auto;
  z-index: 10;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 3rem;
  opacity: 0; /* set opacity 1 on hover / 0 on mouse leave */
`;

export const IndicatorRect = styled.div`
  /* child of SlideIndicator */
  width: 12px;
  height: 2px;
  background: ${(props) => (props.active ? "lightgrey" : "grey")};
  margin: 0 1px;
`;

export const ScrollLeftButton = styled.span`
left: 0;
left: auto;
border-bottom-left-radius: 4px;
border-top-left-radius: 4px;
cursor: pointer;
width: 3rem;
height: 100%;
background-color: #14141440;
position: absolute;
z-index: 10;
display: flex;
justify-content: center;
align-items: center;
font-size: 24px;
color: transparent;
transition: font-size 70ms linear;
opacity: 0;
&:hover {
  font-size: 28px;
}


`;

export const ScrollRightButton = styled.span`
  right: 0;
  left: auto;
  border-bottom-left-radius: 4px;
  border-top-left-radius: 4px;
  cursor: pointer;
  width: 3rem;
  height: 100%;
  background-color: #14141440;
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: transparent;
  transition: font-size 70ms linear;
  opacity: 0;
  &:hover {
    font-size: 28px;
  }

  
`;

export const LeftSide = styled.div`
background-color: green;
opacity: 0.5;

`
export const RightSide = styled.div`
background-color: green;
opacity: 0.5;
`

export const Slides = styled.div`
  /* child of Lane */
  transition: ${(props) => (props.hasTransitionClass ? "ease all 0.5s" : null)};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  scroll-padding-inline: 3rem;
`;

export const Slide = styled.div`
  /* child of Slides */
  display: flex;
  position: relative;
`;

export const SlideInner = styled.div`
  /* child of Slide */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
`;
