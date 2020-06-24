import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navbar from '../components/Nav/Navbar';

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

const Projects = (props) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark (
        sort: { order: DESC, fields: [frontmatter___title]},
        filter: {fileAbsolutePath: {regex: "/projects/"}}
      ) {
        edges {
          node {
            frontmatter{
              title
              desc
              link
            }
            html
            excerpt
          }
        }
      }
    }  
   `)
  return (
    <>
    <Navbar {...props} />
    <MainWrapper color="#e74c3c">
      <Title color="#e74c3c">Projects</Title>
      <p>
        I've worked on many types of projects personally. Here are some projects I've
        developed/created.
      </p>
      <ProjectsList>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li key={edge.node.frontmatter.title}>
              <h3 className="project-title">
                <a target="_blank" rel="noopener noreferrer" href={edge.node.frontmatter.link}>
                  {edge.node.frontmatter.title}
                </a>
              </h3>
              <p dangerouslySetInnerHTML={{ __html: edge.node.frontmatter.desc }} />
            </li>
          )
        })}
      </ProjectsList>
    </MainWrapper>
    </>
  );
}

export default Projects