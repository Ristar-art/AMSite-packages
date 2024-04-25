import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Img from 'gatsby-image';

export default function Home({ data }) {
  return (
     <Layout>
      <section className="hero w-full min-h-screen h-screen">
        <div className="container mx-auto p-4 flex items-center">
          <div className="text-left w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="text-6xl font-bold mb-4">We Design</h2>
            <h3 className="text-4xl mb-8">Develop & deploy websites for you</h3>
            <div className="text-2xl">Atlegile marketing solution from Sowheretoaccess</div>
          </div>
          <Img fluid={data.file.childImageSharp.fluid} className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2" style={{ transform: 'scale(1.1)' }} />
        </div>
      </section>
      </Layout>
    
  );
}

export const query = graphql`
  query HeroQuery {
    file(relativePath: {eq: "Logo.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
