import styled, { keyframes } from 'styled-components';
import Link from 'gatsby-link';

import { media } from './Breakpoints';

const about = '#16a085';
const projects = '#e74c3c';
const contact = '#2980b9';


const SiteTitle = styled.div`
  font-family: sans-serif;
  margin-top: 5vh;
  text-align: center;
  position: aboslute;

  span {
    text-transform: uppercase;
    display: block;
  }
`
const TextAnimation = keyframes`
  0%{
    color: #111;
    margin-bottom: -150px;
  }
  30%{
    letter-spacing: 20px;
    margin-bottom: -150px;
  }
  85%{
    letter-spacing: 8px;
    margin-bottom: -150px;
  }
  100%{
    letter-spacing: 8px;
    margin-bottom: 50px;
  }
`

const TitleText1 = styled.span`
  color: #FBFBFB;
  font-size: 52px;
  font-weight: 700;
  letter-spacing: 8px;
  position: relative;
  background: #111;

  ${media.desktop`
    animation: ${TextAnimation} 3s 1 forwards; 
  `}
`

const TitleText2 = styled.span`
  font-size: 24px;
  color: #FBFBFB;
  background: ${props=>props.background};
  margin: auto;
  width: 70%;
  padding: 10px;

  ${media.phone`
    width: 35%;
  `}
`

const Title = styled.h1`
  display: relative;
  font-size: 38px;
  margin-top: 120px;
  margin-bottom: 30px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  text-align: center;
  text-shadow: 0px 0px 60px ${props => props.color};

  ${media.phone`
    margin-top: 100px;
  `}

`;

const SiteHeader = styled.header`
  display: flex;
  justify-content: space-between;
  position: absolute;
  flex-wrap: wrap;
  top: 0;
  width: 100%;
  &:hover {
    h1 {
      transform: translate3d(80px, 0, 0);
      transition: 0.3s all cubic-bezier(0.165, 0.84, 0.44, 1);
    }
  }
`;

const SubHeader = styled.h3`
  text-transform: uppercase;
  font-weight: 900;
  margin-bottom: 40px;
  letter-spacing: 5px;
  text-align: center;
  font-size: 1.17em;
`;

const SiteNav = styled.nav`
  position: relative;
  > ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    > li {
      margin: 0;
    }
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  padding: 15px 10px 18px;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 5px;
  display: block;
  transition: all 0.3s ease;
  ${media.tablet`
    font-size: 16px;
    padding: 15px 20px 18px;
  `} &:hover {
    border-bottom: 4px solid ${props => props.underline};
  }
`;

const Main = styled.main`
  max-width: 980px;
  margin: 60px auto;
  min-height: 70vh;
  padding: 100px 5% 80px;
`;

const MainWrapper = styled.div`
  margin: 60px auto;
  width: 85%;

  a {
    color: ${props => props.color};
  }
`;

const Logo = styled.span`
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 1px;
  background: #f1c40f;
  color: #111;
  padding: 10px;
  position: relative;
  z-index: 10;
  overflow: hidden;
  font-size: 26px;
  height: 52px;
  width: 52px;
  display: block;
  &:before {
    content: '';
    top: 0;
    left: 0;
    height: 52px;
    width: 156px;
    position: absolute;
    display: block;
    z-index: -1;
    transform: translate3d(
      ${(props) => {
    if (props.page === 'about') return '0px';
    if (props.page === 'projects') return '-52px';
    if (props.page === 'contact') return '-104px';
    return '52px';
  }},
      0,
      0
    );
    background-image: linear-gradient(
      90deg,
      ${about} 33.333%,
      ${projects} 33.333%,
      ${projects} 66.667%,
      ${contact} 66.667%
    );
    background-size: 156px 52px;
    transition: all 0.3s cubic-bezier(0.86, 0, 0.07, 1);
  }
`;

const RainbowAnimation = keyframes` 
  0%,100% {
      background-position: 0 0;
  }

  50% {
      background-position: 100% 0;
  }
`;

const Name = styled.h1`
  margin: 0;
  top: 0;
  position: absolute;
  display: none;
  z-index: 5;
  transform: translate3d(-100%, 0, 0);
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 5px;
  font-size: 24px;
  text-decoration: none;
  font-weight: 900;
  line-height: 52px;
  color: #fff;
  transition: 0.3s all cubic-bezier(0.895, 0.03, 0.685, 0.22);
  ${media.tablet`display: block;`};

  background: linear-gradient(to right, #6666ff, #0099ff , #00ff00, #ff3399, #6666ff);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: ${RainbowAnimation} 6s ease-in-out infinite;
  background-size: 400% 100%;
`;

const SiteLink = styled.div`
  position: relative;
  display: none;
  top: 50px;
  text-align: left;
  margin: auto;
  width: 35%;
  padding: 10px;

  ${media.phone`
    display: block;
  `} 
`;

const bottom_in = keyframes`
  0%{
    
    opacity: 0;
  }
  80%{
    opacity: 0;
  }
  100%{
    
    opacity: 1;
  }
`

const Button = styled.div`
  margin-top: 30px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  
  ${media.desktop`
    animation: ${bottom_in} 3.8s ease-in forwards;
  `}

  a{
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    font-size: 24px;
    overflow: hidden;
    transition: 0.2s;
  }
  a:hover{
    color: #255784;
    background: #2196f3;
    box-shadow: 0 0 10px #2196f3, 0 0 40px #2196f3, 0 0 80px #2196f3;
  }
`

export {
  SiteTitle, Title, SiteHeader, SubHeader, NavLink, SiteNav, MainWrapper, Main, Logo, Name,
  TitleText1, TitleText2, SiteLink, Button};
