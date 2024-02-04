import "./JsonRender.css";

export const JsonRender = ({ json }) => {
  //Recursive
  const renderData = (json, depth = 0) => {
    if (json === null || json === undefined) {
      return <span className="jsonError">Invalid JSON</span>;
    }

    if (typeof json === "object") {
      if (Array.isArray(json)) {
        //Arrays loop
        return (
          <span>
            {json.map((item, index) => (
              <span key={index}>{renderData(item, depth + 1)}</span>
            ))}
          </span>
        );
      } else {
        //Objects loop
        return (
          <span>
            {Object.entries(json).map(([key, val], index) => {
              return (
                <span key={key}>
                  {key} : {renderData(val, depth + 1)}
                  <br />
                </span>
              );
            })}
          </span>
        );
      }
    }
    return String(json);
  };

  return renderData(json);
};