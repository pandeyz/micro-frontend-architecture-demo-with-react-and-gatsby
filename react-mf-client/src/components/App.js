import React, { lazy, Suspense } from "react";

const HelloWorld = lazy(() => import("FIRST_APP/HelloWorld"));

const App = () => {

  return (
    <div>
      <h1>This is ReactJS client</h1>
      <Suspense fallback={<span>Loading...</span>}>
        <HelloWorld />
        <hr />
        <HelloWorld msg={'Lets start'} />
      </Suspense>
    </div>
  );
};

export default App;