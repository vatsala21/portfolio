import { graphql } from "gatsby"

const config = [{
   graphql_query: graphql`
      query {
      placeholderImage: file(relativePath: { eq: "37667298.jpeg" }) {
         childImageSharp {
            fixed(width: 150,height: 150) {
            ...GatsbyImageSharpFixed
            }
         }
      }
      }`,
   type: 'profile_pic',
   key: 'profile_pic',
   style: {
      borderRadius: '50%'
   }
}, ];

export default config;