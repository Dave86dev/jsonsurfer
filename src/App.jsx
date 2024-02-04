import React, { useState } from 'react'

import "./App.css"

import json from "./data/demoData.json"
import { JsonRender } from "./components/JsonRender/JsonRender"

function App() {

  const [selected, setSelected] = useState({
    path: "",
    value: ""
  })

  const inputHandler = (e) => {
    console.log(e.target.value)
  }

  const jsonSelected = (path, value) => {

    console.log(path, value, " so far so good...")

    setSelected({ path, value})
  }

  return (
    <>
      <input 
        type="text"
        value={selected.path || ""}
        onChange={inputHandler}
      />
      {selected.value}
      <JsonRender 
        json={json} 
        selectFunction={jsonSelected}
      />
    </>
  )
}

export default App