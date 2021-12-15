import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hi, I am Astarina Maulida.
        A Fullstack Developer.</p>
      <StaticImage
        alt=""
        src="../images/photoportfolio.png"
      />
    </Layout>
  )
}

export default IndexPage