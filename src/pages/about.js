import React from 'react';
import Layout from '../components/Layout';

import { Title, MainWrapper } from '../components/Styles';
import { Resume, FakeButtons } from '../components/AboutStyles';

export default class About extends React.Component {
  render() {
    return (
      <>
      <Layout {...this.props}>
      </Layout>
      <div>
        <MainWrapper color="#16a085">
          <Title color="#16a085">About</Title>
          <Resume>
            <FakeButtons />
            <div className="resume-inside">
              <h3>&#047;&#042; --Resume-- &#042;&#047;</h3>
              <h4>&#047;&#042; SUMMARY OF QUALIFICATIONS &#042;&#047;</h4>
              <ul>
                <li>
                  Received a Bachelors degree in the Computer Science at the University of Melbourne.
                </li>
                <li>Excellent organization, self-motivation, and problem-solving skills.</li>
                <li>Creative, strong communication skills and consistently meets deadlines.</li>
                <li>Passionate about web development, data analytics and new technologies.</li>
              </ul>

              <h4>&#047;&#042; Experience &#042;&#047;</h4>
              <h5>&#047;&#047; Member of Localisation Team, KhanAcademy.org</h5>
              <span className="time">&#047;&#047; Jun 2019 - Dec 2019</span>
              <ul>
                <li>Weekly translation of 2000+ words questions/articles of computer science materials for the world’s leading non-profit educational organisation</li>
                <li>Assisted in organising and preparing 50+ computer science topic materials, cooperated with a team of over 60 volumteers.</li>
              </ul>

              <h5>&#047;&#047; Casual Volunteer, The Salvation Army Melbourne</h5>
              <span className="time">&#047;&#047; Dec 2016 - Mar 2017</span>
              <ul>
                <li>Raised $500+ funds for the homelessness.</li>
                <li>Collaborated with more than 50 volunteers in fund raising activates  </li>
              </ul>

              <h4>&#047;&#042; EDUCATION &#042;&#047;</h4>
              <ul>
                <li>University of Melbourne - Science Bechelors of Computer Science</li>
              </ul>
            </div>
          </Resume>
        </MainWrapper>
      </div>
      </>
    );
  }
}
