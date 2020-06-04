import styled from "styled-components";
import { media } from './Breakpoints';

export const HomeContainer = styled.main`
  position: relative;
  max-width: 980px;
  margin: 80px auto;
  min-height: 90vh;
  padding: 100px 5% 80px;
`;

// const MainWrapper = styled.div`
//   a {
//     color: ${props => props.color};
//   }
// `;


export const Image = styled.div`
  position: absolute !important;
  bottom: 0px;
  right: 0px;
  padding-top: 50%;
  display: none;

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
  `}

`;
