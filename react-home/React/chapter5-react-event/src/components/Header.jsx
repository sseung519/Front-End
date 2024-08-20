import React from 'react';

// 1. JavaScript's event 에서는 DOM level 2 사용을 권장했으나 
// React에서는 DOM Level 0의 inline 방식을 권장한다.
// 다만, onclick이 아니라 onClick 이다. (대문자 카멜표기법)
const Header = (props) => {
  const clickHandler = (evt) => { //event handler
    console.log(evt)
  }
  return (
    <>
     <header>
      <h1 onClick={clickHandler}>{props.title}</h1>
      </header> 
    </>
  );
};

export default Header;