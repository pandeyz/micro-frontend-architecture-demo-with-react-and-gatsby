import React from "react";

const App = ({ msg='How are you?' }) => {
  return (
    <>
      <div className="heading">Hello World!!</div>
      <div className="sub-heading">{msg}</div>
    </>
  )
};

export default App;