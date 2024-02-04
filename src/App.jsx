// import React, { useState } from 'react'

import "./App.css";

import json from "./data/demoData.json";
import { JsonRender } from "./components/JsonRender/JsonRender";

function App() {
  return (
    <>
      <JsonRender json={json} />
    </>
  );
}

export default App;