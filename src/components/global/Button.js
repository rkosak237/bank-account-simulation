import * as React from "react";
const btnClass = 'btn';

const exampleData = {
    btnClass: 'btn',
    text: 'Pass text to props'
}

export default ({ classname = btnClass, text = text}) => (
  <button className={classname}>{text}</button>
);
