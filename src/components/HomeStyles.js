import styled, { keyframes } from "styled-components";
import { media } from './Breakpoints';

export const HomeContainer = styled.main`
  position: relative;
  max-width: 980px;
  margin: 80px auto;
  min-height: 90vh;
  padding: 100px 5% 80px;
`;


const appear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

export const Image = styled.div`
  position: absolute !important;
  bottom: 0px;
  right: 0px;
  padding-top: 50%;
  display: none;
  opacity: 0;

  .gatsby-image-wrapper {
    position: absolute !important;
    bottom: 0;
    right: 0;
    left: 0;
    margin: 0 auto;
  }

  ${media.phone`
    width: 30%
    display: inline;
  `}

  ${media.giant`
    width: 25%
    display: inline;
    animation: ${appear} 1.2s forwards;
    animation-delay: 3s;
  `}

`;
