import React from "react";
import { Card, Descriptions } from 'antd';
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image"

const { Meta } = Card;

const query1 = graphql`
  query {
    image1: file(relativePath: { eq: "x1.png" }) {
      childImageSharp {
        fixed(width: 400,height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    image2: file(relativePath: { eq: "gatsby-astronaut.png" }) {
      childImageSharp {
        fixed(width: 400,height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`;

const WorkList: React.FC = (props) => {
  const data = useStaticQuery(query1);

  return(
    <Descriptions 
      title="Work"
      column={2}
      layout="horizontal"
    >
      <Descriptions.Item>
        <Card
          hoverable
          bordered
          // style={{ width: '100%'}}
          cover={<Img fixed={data.image1.childImageSharp.fixed} />}
        >
        </Card>
      </Descriptions.Item>

      <Descriptions.Item>
        <Card
          hoverable
          bordered
          // style={{ width: '50%', height: 10 }}
          cover={<Img fixed={data.image2.childImageSharp.fixed} />}
        >
          {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        </Card>
      </Descriptions.Item>


      <Descriptions.Item>
        <Card
          hoverable
          bordered
          // style={{ width: '50%', height: 10 }}
          cover={<Img fixed={data.image1.childImageSharp.fixed} />}
        >
        </Card>
      </Descriptions.Item>

      <Descriptions.Item>
        <Card
          hoverable
          bordered
          // style={{ width: '50%', height: 10 }}
          cover={<Img fixed={data.image2.childImageSharp.fixed} />}
        >
          {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
        </Card>
      </Descriptions.Item>

    </Descriptions>
  
  );
};

export default WorkList;