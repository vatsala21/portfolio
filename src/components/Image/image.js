import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import _ from 'lodash';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */
// const query = graphql`
// query {
//   placeholderImage: file(relativePath: { eq: "37667298.jpeg" }) {
//     childImageSharp {
//       fixed(width: 150,height: 150) {
//         ...GatsbyImageSharpFixed
//       }
//     }
//   }
// }
// `;

const Image = (props) => {
  const { graphql_query , style } = props;


 console.log('Image graphql_query:', graphql_query);
//  console.log('Image style:', style);

  const data = useStaticQuery(graphql_query);

  return <Img style={props.style} fixed={data.placeholderImage.childImageSharp.fixed} />
}

export default Image
