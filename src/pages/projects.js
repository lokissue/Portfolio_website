import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Navbar from '../components/Nav/Navbar';

import { Title, MainWrapper } from '../components/Styles';
import { ProjectsList } from '../components/ProjectsStyles';

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