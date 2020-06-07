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
              <span className="time">&#047;&#047; MAY 2014 - PRESENT</span>
              <ul>
                <li>Worked on a team of translator to coordinate and translate academic materials</li>
                <li>Assisted in organising and preparing computer sicence topic materials</li>
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
