import React from "react";
import button from '../../css/components/button'
export default function ButtonFullWidth(props) {
  return (
    <div>
      <button style={button.buttonFullWidth}>{props.name}</button>
    </div>
  );
}
