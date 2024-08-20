import React from 'react';
import PropTypes from 'prop-types'
function Mycomponent(props) {
  const {
    stringValue,
    booleanValue,
    numberValue,
    arrayValue,
    nodeValue,
    functionValue,
    objectValue
  } = props;
  return (
    <div>
      <ol>
        <li>String Value : {stringValue}</li>
        <li>Number Value : {numberValue}</li>
        <li>Boolean Value : {String(booleanValue)}</li>
        <li>Array Value : {arrayValue}</li>
        <li>NodeValue : {nodeValue}</li>
        <li>FunctionValue : {functionValue}</li>
        <li>Object Value: {JSON.stringify(objectValue)}</li>
      </ol>
    </div>
  );
}
// 다양한 타입 사용해보기
Mycomponent.prototype = {
  name: PropTypes.string,
  numberValue: PropTypes.number,
  booleanValue: PropTypes.bool,
  arrayValue: PropTypes.arrayOf(PropTypes.number),
  nodeValue: PropTypes.node,
  functionValue: PropTypes.func
}
export default Mycomponent;