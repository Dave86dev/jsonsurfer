import "./JsonRender.css"

export const JsonRender = ({ json, selectFunction }) => {
  
  //Emit functionality, delivers selected path and value to UI
  const clickHandler = (path, val) => {
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
                  {/* Rendering more deep inside the array for each item */}
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
              // not falsy actualRoute is added to the path, otherwise we provide just key
              const newPath = actualRoute ? `${actualRoute}.${key}` : key
              return (
                <span key={`${actualRoute}.${key}`} style={{ paddingLeft: `${depth * 1.2}em` }}>
                  <span
                    // If the value of the key is an array, we make it non clickable and without blue color
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
                  {/* if index is the actual length of the object, we don't render comma, otherwise yes */}
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
      //In case it's primitive data types (number, string, bool..), we render here
      return typeof json === "string" ? `'${json}'` : String(json)
    }
  }
  return <div className="jsonContainer">{renderData(json)}</div>
}