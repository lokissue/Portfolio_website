import styled, { keyframes } from "styled-components";


const rainbow_animation = keyframes` 
  0%,100% {
      background-position: 0 0;
  }

  50% {
      background-position: 100% 0;
  }
`;

const Text_Animation = keyframes`
  0%{
    color: black;
    margin-bottom: -40%;
  }
  30%{
    letter-spacing: 25px;
    margin-bottom: -40px;
  }
  85%{
    letter-spacing: 8px;
    margin-bottom: -40px;
  }
`