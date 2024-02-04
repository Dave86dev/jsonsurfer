import "./JsonRender.css"

export const JsonRender = ({ json, selectFunction }) => {
  const clickHandler = (path, val) => {
    console.log("the path to victory! ;-)", path)
    selectFunction(path, val)
  }

  //Recursive
  const renderData = (json, depth = 0, actualRoute = "") => {

    if (typeof json === "object" && json !== null) {
      if (Array.isArray(json)) {
        //Arrays loop
        return (
          <span>
            [<br />
            {json.map((item, index) => (
              <span key={`${actualRoute}[${index}]`}>
                <span style={{ paddingLeft: `${depth * 1.2}em` }}>
                  {renderData(
                    item, 
                    depth + 1,
                    `${actualRoute}[${index}]`
                  )}
                </span>
                {index < json.length - 1 ? "," : ""}
                <br />
              </span>
            ))}
            <span style={{ paddingLeft: `${depth - 1 * 1.2}em` }}>]</span>
          </span>
        )
      } else {
        //Objects loop
        return (
          <span>
            {depth === 0 ? "" : "{"}
            <br />
            {Object.entries(json).map(([key, val], index) => {
              const newPath = actualRoute ? `${actualRoute}.${key}` : key
              return (
                <span key={`${actualRoute}.${key}`} style={{ paddingLeft: `${depth * 1.2}em` }}>
                  <span
                    className={Array.isArray(val) ? "" : "elementClick"}
                    onClick={() => (typeof val !== "object" || val === null) && clickHandler(newPath, String(val))}
                  >
                    {key}
                  </span>
                  : {renderData(
                      val, 
                      depth + 1,
                      newPath
                    )}
                  {index < Object.entries(json).length - 1 ? "," : ""}
                  <br />
                </span>
              )
            })}
            <span style={{ paddingLeft: `${depth * 0.7}em` }}>
              {depth === 0 ? "" : "}"}
            </span>
          </span>
        )
      }
    } else {
      return typeof json === "string" ? `'${json}'` : String(json)
    }
  }
  return <div className="jsonContainer">{renderData(json)}</div>
}