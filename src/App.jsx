import "./App.css"
import React, { useState, useEffect } from "react"

import json from "./data/demoData.json"
import { JsonRender } from "./components/JsonRender/JsonRender"
import { explorer } from "./utils/explorer"

function App() {
  const [selected, setSelected] = useState({
    path: "",
    value: "",
  })

  const [criteria, setCriteria] = useState("")

  //Handles active user search
  useEffect(() => {
    if (criteria === "") {
      setSelected((prevState) => ({
        ...prevState,
        value: "",
      }))
    } else {
      //Criteria is not empty, hence we search!

      let res = explorer(json, criteria);

      //explorer.js recursive search function can return undefined as a value, we format in case
      if (res === undefined) {
        res = "undefined"
      }
      setSelected({
        path: "",
        value: res,
      })
    }
  }, [criteria])

  const inputHandler = (e) => {
    setCriteria(e.target.value)
  }
  
  //Displays key and value selected by user
  const jsonSelected = (path, value) => {
    setSelected({ path, value })

    //by reseting user input we ensure our selection path is displayed
    setCriteria("")
  }

  return (
    <div className="mainContainer">
      <div className="answer">
        <h4>Property</h4>
        <input
          className="input"
          type="text"
          value={criteria || selected.path || ""}
          onChange={inputHandler}
        />
        <div className="value">{selected.value}</div>
      </div>
      <h4>Response</h4>
      <JsonRender json={json} selectFunction={jsonSelected} />
    </div>
  )
}

export default App