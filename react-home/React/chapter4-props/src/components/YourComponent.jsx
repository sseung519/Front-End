import React from 'react';
import datatype from 'prop-types';
function YourComponent(props) {
  const {
    objValue,
    requiredStringValue
  } =props;
  return (
    <div>
      <div>객체값 : {JSON.stringify(objValue)}</div>
      <div>필수값 : {requiredStringValue}</div>
    </div>
  );
}

YourComponent.prototype = {
  // objValue: datatype.object,
  objValue: datatype.shape({
    name: datatype.string,
    age: datatype.number,
  }),
  requiredStringValue: datatype.string.isRequired,
}

export default YourComponent;