import * as React from "react";
import { Dynamic } from 'gatsby-plugin-federation';

const RemoteHelloWorld = Dynamic(() => import('FIRST_APP/HelloWorld'));

const IndexPage = () => {
  return (
    <div>
      <h1>Index Page - Gatsby Client</h1>
      <RemoteHelloWorld
        fallback={<p role="status">Loading...</p>}
      />
      <hr />
      <RemoteHelloWorld
        fallback={<p role="status">Loading...</p>}
        msg={`lets play the music 🕺`}
      />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
