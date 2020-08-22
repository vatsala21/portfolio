import React from "react";
import { List, Card } from 'antd';
import { Link, useStaticQuery } from "gatsby";
import Image from "../Image/image"
import ImageConfig from '../Image/Config/work';
import _ from 'lodash';

const queries = _.map(ImageConfig, (conf) => {
  return {graphql_query: conf.graphql_query}
});

const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];

const WorkList: React.FC = (props) => {
  // const { graphql_query, style } = ImageConfig[0];
  const data = useStaticQuery(queries[0].graphql_query);
  
  return(
    // <>
    //   <p>s</p>
    // </>
    <Image graphql_query={data} style={{}} />

    // <List
    //   grid={{ column: 2 }}
    //   size="small"
    // //   header={<div>Header</div>}
    // //   footer={<div>Footer</div>}
    // //   bordered
    //   dataSource={data}
    //   renderItem={item => (
    //     <List.Item>
    //         <Card>
    //             {/* <Image imageName="37667298.jpeg"/> */}
    //             <Image graphql_query={graphql_query} style={style} />
    //         </Card>
    //     </List.Item>
    //   )}
    // />
  );
};

export default WorkList;