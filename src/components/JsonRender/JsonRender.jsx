import "./JsonRender.css"

export const JsonRender = ({ json }) => {

  const clickHandler = (val) => {
    console.log("ou yeah, the value is... ", val)
  }

  //Recursive
  const renderData = (json, depth = 0) => {
    if (json === null || json === undefined) {
      return <span className="jsonError">Invalid JSON</span>
    }

    if (typeof json === "object") {
      if (Array.isArray(json)) {
        //Arrays loop
        return (
          <span>
            [<br />
            {json.map((item, index) => (
              <span key={index}>
                <span style={{ paddingLeft: `${depth * 1.2}em`}}>
                {renderData(item, depth + 1)}
                </span>
                <br/>
                </span>
            ))}
            <span style={{ paddingLeft: `${depth -1 * 1.2}em`}}>]</span>
          </span>
        )
      } else {
        //Objects loop
        return (
          <span> 
            {depth === 0 ? "" : "{"}
            <br />
            {Object.entries(json).map(([key, val], index) => {
              return (
                <span key={key} style={{ paddingLeft: `${depth * 1.2}em`}}>
                    <span
                        className={Array.isArray(val) ? "" : "elementClick"}
                        onClick={()=> (typeof(val) !== "object") && clickHandler(val)}
                    >
                        {key}
                    </span>:{" "}{renderData(val, depth + 1)}
                  <br />
                </span>
              )
            })}
            <span style={{ paddingLeft: `${depth * 0.7}em`}}>
            {depth === 0 ? "" : "}"}
            </span>
          </span>
        )
      }
    }
    return String(json)
  }

  return renderData(json)
}