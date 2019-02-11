import * as React from "react";

const exampleData = {
    btnClass: 'btn',
    text: 'Pass text to props',
}

export default ({
  classname = exampleData.btnClass,
  text = exampleData.text,
  event
}) => (
  <button onClick={event} className={classname}>
    {text}
  </button>
);
