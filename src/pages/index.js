import React from "react";
import Layout from "../components/Layout";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";

export default function Home({ data }) {
  const heroData = data.heroQuery;
  const markdownData = data.markdownQuery;
  console.log(markdownData);
  return (
    <Layout>
      <main class="flec flex-col flex-1 p-4">
        <section
          id="hero"
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14"
        >
          <div className="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 className="font-semibold text-4xl sm:text-5xl md:text-6xl">
              We Design
            </h2>
            <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl">
              Develop & Deploy Websites for you
            </h2>
            <div>
              <span>A</span>
              <span>M</span>
              <span>Site</span>
              <br />
              from SoWhereToAccess
            </div>

            {/*       
            <h2 className="text-5xl font-bold mb-4">Digitizing <br/>African Brands</h2>
            <h3 className="text-4xl mb-8">Making it affordable for any Business to have an Online Office</h3>
          
               <span>A</span>
                 <span>M</span>
                   <span className="text-customOrange">Site</span>
                   Packages */}
          </div>
          <div className="relative  grid place-items-center">
            <Img
              fluid={heroData.childImageSharp.fluid}
              className="w-full h-58"
            />
          </div>
        </section>
        {/* <section id="process" children="py-20 lg:py-32 flex flex-col gap-24">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
            />
          </svg>
        </section> */}

        <section id="packages" className="py-24 lg:py-32 flex flex-col gap-24">
          <h6 className=" text-lg sm:text-xl md:text-2xl text-center text-semibold">
            AMSITE SUBSCRIPTION SERVICES
          </h6>
        </section>
        <section id="services" className="">
          <div>
            {markdownData &&
              markdownData.nodes &&
              markdownData.nodes.map((services, index) => (
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14`}
                  key={services.id}
                >
                  <div className="shadow-2xl rounded-lg w-full my-4 overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-105">
                    <Img
                      fluid={
                        services.frontmatter.thumb.childrenImageSharp[0].fluid
                      }
                      alt={services.frontmatter.title}
                    />
                  </div>
                  <div
                    className={
                      index === 1
                        ? "lg:text-left lg:order-first"
                        : "lg:text-left"
                    }
                  >
                    <div className="bg-slate-400 md:mt-20">
                      <div
                        className={`flex flex-col lg:justify-center gap-6 md:gap-8 lg:gap-10`}
                      >
                        <h3>{services.frontmatter.title}</h3>
                        <h3>{services.frontmatter.services}</h3>
                        <h3>
                          {services.frontmatter.description
                            .split("\n")
                            .map((point, index) => (
                              <div key={index}>{point}</div>
                            ))}
                        </h3>
                      </div>
                      <Link
                        to={"/" + services.frontmatter.slug}
                        className={`flex flex-col lg:justify-center gap-6 md:gap-8 lg:gap-10`}
                      >
                        <button>Check it out</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          {/* <div className="relative shadow-2xl grid place-items-center">
             <Img
              fluid={heroData.childImageSharp.fluid}
              className="w-full h-58"
            />

          </div> */}
        </section>
      </main>
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
          description
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
