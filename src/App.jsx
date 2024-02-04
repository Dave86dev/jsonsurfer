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
    if(criteria === ""){
       setSelected((prevState) => ({
        ...prevState,
        value: ""
       }))
    } else{
      //Criteria is not empty, hence we search!
    
      let res = explorer(json, criteria)

      setSelected({
        path: "",
        value: res
      })
    
    }
    
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