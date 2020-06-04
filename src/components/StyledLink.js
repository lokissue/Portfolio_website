import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";


const TextLink = ({ className, children, link }) => (
    <Link className={className} to={link}>
      {children}
    </Link>
  );


const TextAnimation_1 = keyframes`
  0%{
    width: 0px;
  }
  100%{
    width: 254.047px;
  }
`

const bottom_in = keyframes`
  0%{
    transform: translateY(-100px);
    opacity: 0;
  }
  100%{
    transform: translateY(0px);
    opacity: 1;
  }
`


const StyledTextLink = styled(TextLink)`

    position: relative;
    display: block;
    color: rgba(255,255,255,0.7);
    text-decoration: none;
    font-size: 1.5em;
    font-weight: 700;
    margin-top: 50px;
    opacity: 0;
    animation: ${bottom_in} 0.5s ease-in forwards;
    animation-delay: 3.1s;

    ::before {
      content: '${props => props.children}';
      position: absolute;
      margin: 0;
      overflow-y: hidden;
      color: #1bfaad;
      white-space:nowrap;
      overflow: hidden;
      width: 0px;
    }

    :hover::before {
      animation: ${TextAnimation_1} 0.8s forwards;
    }
`

export default StyledTextLink;