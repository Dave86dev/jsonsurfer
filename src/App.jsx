import React, { useState, useEffect } from 'react'

import "./App.css"

import json from "./data/demoData.json"
import { JsonRender } from "./components/JsonRender/JsonRender"
import { explorer } from './utils/explorer'

function App() {

  const [selected, setSelected] = useState({
    path: "",
    value: ""
  })

  const [criteria, setCriteria] = useState("")

  useEffect(()=>{
    let res = explorer(json, criteria)
    console.log(res, "comes back from the search function")
  },[criteria])

  const inputHandler = (e) => {
    setCriteria(e.target.value)
  }

  const jsonSelected = (path, value) => {
    setSelected({ path, value})
    setCriteria("")
  }

  return (
    <>
      <input 
        type="text"
        value={criteria || selected.path || ""}
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