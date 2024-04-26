const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
    console.log('this is happening')
  const { data } = await graphql(`
   query OurServices {
      allMarkdownRemark {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);
    
    data.allMarkdownRemark.nodes.forEach(node => {
        actions.createPage({
            path: "/" + node.frontmatter.slug,
            component: path.resolve('./src/templates/serviceDetails.js'),
            context:{slug: node.frontmatter.slug}
        })
    })
};
