import { graphql } from "gatsby"

const config = [{
   graphql_query: graphql`
      query {
      placeholderImage: file(relativePath: { eq: "s2.jpeg" }) {
         childImageSharp {
            fixed(width: 200,height: 200) {
            ...GatsbyImageSharpFixed
            }
         }
      }
      }`,
   type: 'work',
   key: 'work',
   style: {
      borderRadius: '50%'
   }
}, ];

export default config;