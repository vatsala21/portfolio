import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import 'antd/dist/antd.css';
import About from "../components/about";
import Skills from "../components/skills";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <About />
    <Skills />
  </Layout>
)

export default IndexPage
