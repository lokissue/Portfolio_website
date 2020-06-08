import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { HomeContainer, Image } from "./HomeStyles";
import { SiteTitle, TitleText1, TitleText2, Button } from './Styles';
import { FaDownload } from "react-icons/fa";



const Home = () => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "rs-hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <>
    <HomeContainer>
      <SiteTitle>
        <TitleText1>Hey, my name's <br /> Luoming Zhang</TitleText1>
        <TitleText2 background='#16a085'> web developer </TitleText2>
        <TitleText2 background='#c90e9e'> data analyst </TitleText2>
        <Button color='#21ebff'>
          <a href= "about" >ABOUT ME</a>
          <a href="projects" >PROJECTS</a>
          <a href="https://www.dropbox.com/s/j3f85vf9xtkbxpx/Luoming%20Zhang%20-%20CV.pdf?dl=1" >RESUME <FaDownload /></a>
        </Button>
      </SiteTitle>

    </HomeContainer>
    <Image>
      <Img fluid={file.childImageSharp.fluid} />
    </Image>
    </>
  );
};

export default Home;
