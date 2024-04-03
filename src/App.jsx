/* This code snippet is a React component named `App` that serves as the main entry point of the
application. Here's a breakdown of what the code is doing: */
import React, { useState } from "react";
import Form from "./components/Form";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import Preview from "./components/Preview";
import Pay from "./components/Pay";
import Done from "./components/done";

function App() {
  /* The line `const [data1, setData1] = useState(null);` in the `App` component is using the `useState`
hook from React to declare a state variable named `data1` and a function to update that state named
`setData1`. */
  const [data1, setData1] = useState(null);

  /**
   * The function `data` sets the value of `data1` and logs the data to the console.
   */
  function data(data) {
    setData1(data);
    console.log(data);
  }

  /* The `return` statement in the `App` component is returning a JSX fragment that contains a `Routes`
 component from `react-router-dom`. Within the `Routes` component, there are multiple `Route`
 components defined with different paths and corresponding elements. */
  return (
    <>
      {/* The `<Routes>` component from `react-router-dom` in the `App` component is setting up the
      routing configuration for the application. Each `<Route>` component within `<Routes>` defines
      a specific path and the corresponding component that should be rendered when that path is
      matched. */}
      <Routes>
        <Route path="/form" element={<Form data={data} />} />
        <Route path="/preview" element={<Preview data={data1} />} />
        <Route path="/pay" element={<Pay data={data1} />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </>
  );
}

export default App;
