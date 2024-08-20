import { useState, useEffect, useRef } from 'react'
import MyComponent from './components/MyComponent';

function App() {
const [count, setCount] = useState(0);
const flag = useRef(false);
// 1. Mount
// 페이지가 처음 rendering 될 때 한번만 호출
useEffect(()=> {
  
  console.log('mount...');
}, []);


const myClick = () => {
  setCount(count + 1);
}
// 2. Update
// 페이지가 re-rendering 될 때 마다
useEffect(() => {
  if(!flag.current) {
    flag.current == true;
  }
  console.log('Update...')
}); 
  return (
    <>
      <h1>Count : {count}</h1>
      <button type='button' onClick={myClick}>Count Up</button>
      { count % 2 == 0 ? <MyComponent /> : null}
    </>
  )
}

export default App
