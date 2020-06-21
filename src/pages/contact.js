import React from 'react';
import Navbar from '../components/Nav/Navbar';
import { Title, MainWrapper } from '../components/Styles';

export default class Index extends React.Component {
  render() {
    return (
      <>
      <Navbar {...this.props} />
      <MainWrapper color="#2980b9">
        <Title color="#2980b9">Contact</Title>
        <p>Feel free to contact me through the email below, I'd love to chat.</p>
        <p className="cont">
          <a href="mailto:lokissue@gmail.com" className="email">
            lokissue@gmail.com
          </a>
        </p>
      </MainWrapper>
      </>
    );
  }
}
