import React from 'react';
import { useRef } from 'react'

function Main(props) {
  const nameRef = useRef();
  const onSubmit = () => {
    // const name = document.querySelector('#username').value; <= 자바스크립트 방식
    const name = nameRef.current.value
    // console.log(name);
    if(!nameRef.current.value || nameRef.current.value === ''){
      nameRef.current.style.border = '1px solid red';
      nameRef.current.focus();
    }
  }
  return (
    <div>
      Name : <input type="text" ref={nameRef} /> <br />
      <button type='button' onClick={onSubmit} >Submit</button>
    </div>
  );
}

export default Main;