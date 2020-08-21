import React from "react"

import { Row, Col, Progress, Card, Tabs } from 'antd';

const { TabPane } = Tabs;

const Skills = (props) => {

 return (
   <>
    <Row align="middle" justify='center'>
        <Col span={8}>
            <Card>
                Hello World
            </Card>
        </Col>
        <Col span={16}>
            <Tabs defaultActiveKey="1" centered>
                <TabPane tab="Skills" key="1">
                    <Card>
                        Javascript<Progress percent={95} />
                        Reactjs<Progress percent={85} />
                        Gatsbyjs<Progress percent={80} />
                        UI/UX<Progress percent={90} />
                    </Card>
                </TabPane>
                <TabPane tab="Tools" key="2">
                    <Card>
                        AdobeXD<Progress percent={95} />
                        Photoshop<Progress percent={70} />
                        Illustrator<Progress percent={65} />
                        Figma<Progress percent={80} />
                    </Card>
                </TabPane>
            </Tabs>
        </Col>
    </Row>
   </>
 )
}

export default Skills;
