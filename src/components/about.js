import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Row, Col } from 'antd';

const query = graphql`
query {
  placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
    childImageSharp {
      fixed(width: 150,height: 150) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;

const About = (props) => {
  const data = useStaticQuery(query);

 return (
   <>
    <Row align="middle" justify='center'>
        <Col>
           <Img style={{ borderRadius: '50%' }} fixed={data.placeholderImage.childImageSharp.fixed} />
        </Col>
    </Row>
   </>
 )
}

export default About
