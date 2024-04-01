import React, { useState } from "react";
import Form from "./components/Form";
import Details from "./components/Details";
import { Routes, Route } from "react-router-dom";
import Preview from "./components/Preview";
import Pay from "./components/Pay";
import Done from "./components/done";

function App() {
  const [data1, setData1] = useState(null);

  function data(data) {
    setData1(data);
    console.log(data);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Details />} />
        <Route path="/form" element={<Form data={data} />} />
        <Route path="/preview" element={<Preview data={data1} />} />
        <Route path="/pay" element={<Pay data={data1} />} />
        <Route path="/done" element={<Done />} />
      </Routes>
    </>
  );
}

export default App;
