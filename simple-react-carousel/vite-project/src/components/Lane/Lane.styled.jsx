import styled from "styled-components";

export const LaneContainer = styled.section`
  overflow: hidden;
  position: relative;
`;

export const SlideIndicator = styled.div`
  /* child of LaneContainer */

  width: 100%;
  z-index: 10;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IndicatorRect = styled.div`
  /* child of SlideIndicator */
  width: 20px;
  height: 5px;
  background: ${(props) => (props.active ? "lightgrey" : "grey")};
  margin: 0 5px;
`;

export const ScrollLeftButton = styled.span`
  /* child of LaneContainer */
  /* position: absolute;
  opacity: ${(props) => (props.disabled ? "0.3" : "1")}; */
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
  &:hover {
    color: white;
    background-color: #14141480;
    font-size: 28px;
  }
`;

export const ScrollRightButton = styled(ScrollLeftButton)`
  right: 0;
  left: auto;
`;

export const Slides = styled.div`
  /* child of Lane */
  transition: ${(props) => (props.hasTransitionClass ? "ease all 0.5s" : null)};
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
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
