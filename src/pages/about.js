import React from 'react';
import Layout from '../components/Layout';
import { graphql, useStaticQuery, StaticQuery } from 'gatsby';

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
              <ResumeContent />
            </div>
          </Resume>
        </MainWrapper>
      </div>
      </>
    );
  }
}


const ResumeContent = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter{
              title
            }
            html
          }
        }
      }
    }
   `)
   console.log(data.allMarkdownRemark.edges[0].node.html)

   return (
      <div dangerouslySetInnerHTML={{__html: data.allMarkdownRemark.edges[0].node.html}} />
   )
}

