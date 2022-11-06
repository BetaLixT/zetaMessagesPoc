import React from "react"
import { Router } from "@reach/router"
import Seo from "../components/seo"


import HomePage from "../projects/birthday22/index.js"


const App = () => {
  return (
    <div>
      <Seo title="Happy Birthday!"
        description="Happy Birthday!"
        image="https://vivalakiara.com/korea22_qkrdydzl_meta.jpeg" />
      <Router basepath="/">
        <HomePage path="/" />
      </Router>
    </div>
  )
}
export default App
