import styled from "styled-components";

export const Wrapper = styled.div`
/* background-color: var(--componentColor); */

& * {
    margin: 0;
    padding: 0;
    user-select:none;
-webkit-user-drag: none;
}
h2 {
    display: block;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    a {
        text-decoration: none;
        height: 80%;
        width: 0;
        padding-inline: 2em;

        div {
            width: max-content;
            height: 50%;
        }
    }
}

.prevButton, .nextButton {
    cursor: pointer;
    width: 3%;
    height: 100%;
    background-color: #14141440;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items:center;
    font-size: 1.6vw;
    color: transparent;
    transition: font-size 70ms linear;
    &:hover {
        background-color: #14141480;
        font-size:2.2vw;
    }
}
.prevButton {
    border-right: 0.2vw;
    left:0;
}
.nextButton {
    border-left: 0.2vw;
    right:0;
}
`

export const Line = styled.div`
    display:flex;
    width: 100;
    position: relative;
    overflow:hidden;
    &:hover .prevButton,
    :hover .nextButton {
        color: #fff;
    }
`

export const LineContentMask = styled.div`
    margin: auto;
    width: 94%;
    overflow-x: show;
`

export const LineContent = styled.div`
    display: flex;
    /* background-color: #444444; */
    transform: translateX();
    position: relative;
    .lineItem {
        position:relative;
        width: calc(100% / 6);
        aspect-ratio: 235.109 / 132.375;
        box-sizing:content-box;
        /* border: 1px solid black; */
        flex-shrink:0;
        
        img {
            cursor: pointer;
            border-radius: 0.3vw;
            overflow:hidden;
            padding-inline: 0.8%;
            width:100%;
        }
    }
`

export const LineItem = styled.div`
    
`