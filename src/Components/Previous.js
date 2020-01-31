import React from "react";

function Previous(props) {
  return (
    <button onClick={props.Page} className="previous">
      {"< "}Previous
    </button>
  );
}
export default Previous;
