import React from 'react';
import Layout from '../components/Layout';

import { Title, MainWrapper } from '../components/Styles';
import { ProjectsList } from '../components/ProjectsStyles';

const projects = [
  {
    title: 'My profolio website',
    link: '/',
    desc: 'Built with: React, GastbyJS',
  },
  {
    title: 'IBM Data Science Capstone Project',
    link: 'https://github.com/lokissue/IBM-Data-Science-Professional-Certificate',
    desc:
      'IBM Data Science Professional Course on: <a target="_blank" href="https://www.coursera.org/account/accomplishments/professional-cert/L8R44J76KQK3?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=prof">Coursera</a><br />Analysed New York City neighbourhoods with K-means clustering, used numpy, pandas, matplotlib, sklearn, folium and Foursqure API',
  },
  {
    title: 'Heirloom22',
    link: 'https://heirloom22-2b4a8.web.app/',
    desc: 
      'Family Artefacts Management Web App, built with: React, Redux, Google Firebase, Ant Design'
  },
  {
    title: 'Data Analytics Project: Education Level & Income',
    link: 'https://github.com/lokissue/Data-Analysis-Income-Education-Level-in-VIC',
    desc:
    'Libraries used: numpy, pandas, matplotlib, seaborn'
  }
];

export default class Projects extends React.Component {
  render() {
    return (
      <>
      <Layout {...this.props}>

      </Layout>
      <MainWrapper color="#e74c3c">
        <Title color="#e74c3c">Projects</Title>
        <p>
          I've worked on many types of projects personally. Here are some projects I've
          developed/created.
        </p>
        <ProjectsList>
          {projects.map(project => (
            <li key={project.title}>
              <h3 className="project-title">
                <a target="_blank" rel="noopener noreferrer" href={project.link}>
                  {project.title}
                </a>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: project.desc }} />
            </li>
          ))}
        </ProjectsList>
      </MainWrapper>
      </>
    );
  }
}
