/**
 * Seo component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { Helmet } from "react-helmet"

function Seo(content) {

  console.log(content.title)
  console.log(content.description)
  return (
    <Helmet>
      <title>VivaLaKiara - From the KFP</title>
      <meta name="title" content={content.title}/>
      <meta name="description" content={content.description}/>
      <meta property="og:type" content="website"/>
      <meta property="og:url" content="https://vivalakiara.com/"/>
      <meta property="og:title" content={content.title}/>
      <meta property="og:description" content={content.description}/>
      <meta property="og:image" content={content.image}/>
      <meta property="twitter:card" content="summary_large_image"/>
      <meta property="twitter:url" content="https://twitter.com/KFP_TheOffice"/>
      <meta property="twitter:title" content={content.title}/>
      <meta property="twitter:description" content={content.description}/>
      <meta property="twitter:site" content="KiaraFamilyNews"/>
      <meta property="twitter:image" content={content.image}></meta>
    </Helmet>
  )
}
export default Seo
