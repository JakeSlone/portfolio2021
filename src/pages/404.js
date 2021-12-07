import * as React from "react"

import Seo from "../components/Nav/Seo"

const NotFoundPage = () => (
  <div style={{ margin: "auto", width: "50%" }}>
    <Seo title="404: Not found" />
    <h1>404</h1>
    <a href="/">Go to homepage</a>
  </div>
)

export default NotFoundPage
