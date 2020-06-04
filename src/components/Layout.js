import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import 'typeface-lato';
import 'typeface-inconsolata';

import './styles.css';
import {
  SiteHeader, SiteNav, NavLink, Logo, Name,
} from './Styles';
// import Footer from './Footer';

const Layout = ({ location, children }) => (
  <div>
    <Helmet title="Luoming Zhang's Profolio website" />
    <SiteHeader>
      <Link to="/">
        <Logo page={location.pathname.replace('/', '')}>LZ</Logo>
        <Name>Luoming Zhang</Name>
      </Link>
      <SiteNav>
        <ul>
          <li>
            <NavLink underline="#16a085" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink underline="#e74c3c" to="/projects">
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink underline="#2980b9" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </SiteNav>
    </SiteHeader>
    {/* {children}
    <Footer /> */}
  </div>
);

export default Layout;