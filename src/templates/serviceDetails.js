import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Img from "gatsby-image";

export default function serviceDetails({ data }) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Layout>
      <div>
        <h2>{frontmatter.title}</h2>
        <h3>{frontmatter.services}</h3>
        <Img fluid={frontmatter.thumb.childrenImageSharp[0].fluid} alt={frontmatter.title} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  );
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
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
    }
  }
`;

