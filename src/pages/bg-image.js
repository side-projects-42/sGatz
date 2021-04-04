import React from 'react'
import {graphql, useStaticQuery} from 'gatsby'
import {getImage} from 'gatsby-plugin-image'
// import BackgroundImage from 'gatsby-background-image'
import {BgImage} from 'gbimage-bridge'

const GbiBridged = () => {

  const {backgroundImage123} = useStaticQuery(
    graphql`
      query{
        backgroundImage123: file(relativePath: {eq: "NIK_64718.JPG"}){
          childImageSharp{
            gatsbyImageData(
              width: 2000
              quality: 50
              webpOptions: {quality: 70}
            )
          }
        }
      }
    `
  )
  const pluginImage = getImage(backgroundImage123)

  return(
    <BgImage 
      style={{minHeight:'100vh'}}
      image = {pluginImage}
    >
      <h1>This is the Background Image Test Page</h1>
    </BgImage>

  )
}

export default GbiBridged