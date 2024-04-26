import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Home({ data }) {
  const heroData = data.heroQuery;
  const markdownData = data.markdownQuery;
  console.log(markdownData)

  return (
    <Layout>
      <section className="hero w-full min-h-screen h-screen">
        <div className="container mx-auto p-4 flex items-center">
          <div className="text-left w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
            <h2 className="text-6xl font-bold mb-4">We Design</h2>
            <h3 className="text-4xl mb-8">Develop & deploy websites for you</h3>
            <div className="text-2xl">
              Atlegile marketing solution from Sowheretoaccess
            </div>
          </div>
          <Img
            fluid={heroData.childImageSharp.fluid}
            className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
            style={{ transform: "scale(1.1)" }}
          />
        </div>
      </section>
      <section c>
        <div>
          {markdownData &&
            markdownData.nodes &&
            markdownData.nodes.map((services) => (
              <Link to={"/" + services.frontmatter.slug} key={services.id}>
                <div>
                  {" "}
                  <h3 className="text-4xl mb-8">
                    {services.frontmatter.title}
                  </h3>{" "}
                </div>
                <div> {services.frontmatter.services}</div>
                
                <Img fluid={services.frontmatter.thumb.childrenImageSharp[0].fluid} alt={services.frontmatter.title}
                className="w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2"
                        style={{ transform: "scale(0.5)" }}
                />
               
              </Link>
            ))}
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query {
    heroQuery: file(relativePath: { eq: "Logo.png" }) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    markdownQuery: allMarkdownRemark {
      nodes {
        frontmatter {
          slug
          title
          services
          thumb {
            childrenImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        id
      }
    }
  }
`;

