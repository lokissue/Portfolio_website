import React from 'react';
import styled from 'styled-components';
import { media } from './Breakpoints';
import { SubHeader } from './Styles';

const FooterLinks = [
  {
    name: 'Github',
    link: 'https://github.com/lokissue',
    color: '#4183c4',
  },
  {
    name: 'Facebook',
    link: 'https://www.facebook.com/profile.php?id=100010963540545',
    color: '#3b5998',
  },
];

const Footer = () => (
  <footer className="footer">
    <SubHeader>Where to find me</SubHeader>
    <SocialLinks>
      {FooterLinks.map(link => (
        <li key={link.name}>
          <SocialLink target="_blank" rel="nofollow" color={link.color} href={link.link}>
            {link.name}
          </SocialLink>
        </li>
      ))}
    </SocialLinks>
  </footer>
);

export default Footer;

const SocialLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  text-align: center;
  ${media.tablet`
    display: flex;
    justify-content: center;
    li + li {
      margin-left: 20px;
    }
  `}
`;

const SocialLink = styled.a`
  padding: 5px 8px;
  border-radius: 3px;
  transition: all 0.3s ease;
  color: #fff;
  background-color: ${props => props.color};
`;
