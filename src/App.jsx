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

  useEffect(() => {
    if (criteria === "") {
      setSelected((prevState) => ({
        ...prevState,
        value: "",
      }))
    } else {
      //Criteria is not empty, hence we search!

      let res = explorer(json, criteria);
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

  const jsonSelected = (path, value) => {
    setSelected({ path, value })
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