import React from "react"
import Image from "../components/Image/image"
import ImageConfig from '../components/Image/Config/profile_pic';

import { Row, Col } from 'antd';
import _ from 'lodash';

const queries = _.map(ImageConfig, (conf) => {
  return {graphql_query: conf.graphql_query}
});

const About = (props) => {
 const { graphql_query, style } = ImageConfig[0];
//  console.log('About ImageConfig:', ImageConfig);
//  console.log('About graphql_query:', graphql_query);
//  console.log('About style:', style);
console.log('queries:', queries);

// _.map(queries, (x) => {
//   console.log('x:', x);
//   const run = useStaticQuery(x);
// });
 return (
   <>
    <Row align="middle" justify='center'>
        <Col>
            <Image graphql_query={queries[0].graphql_query} style={style} />
        </Col>
    </Row>
   </>
 )
}

export default About
