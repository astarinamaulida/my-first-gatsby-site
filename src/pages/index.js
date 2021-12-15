import * as React from 'react'
import Layout from '../components/layout'

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <StaticImage
        alt="Hi, I am Astarina Maulida.
        A Fullstack Developer"
        src="../images/photoportfolio.png"
      />
    </Layout>
  )
}

export default IndexPage