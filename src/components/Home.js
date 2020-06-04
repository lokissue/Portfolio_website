import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { HomeContainer, Image } from "./HomeStyles";
import { SiteTitle, TitleText1, TitleText2, Button } from './Styles';


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
        <Button><a href="/">Resume</a></Button>
      </SiteTitle>

    </HomeContainer>
    <Image>
      <Img fluid={file.childImageSharp.fluid} />
    </Image>
    </>
  );
};

export default Home;
