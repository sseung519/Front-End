
// import './App.css'

// JSX: JavaScript XML
// 1. DOM을 ""로 묶지 않는다.
// const elem = <h1>Hello, World!</h1>
// function App() {
//   return elem;
// }
// 2. 단일 요소만 return 해야 한다.
// const elem = <>
//  <h1>Hello, World</h1>
//  <h2>React 18!!!</h2>
// </>
// function App() {
//  return elem;
// }
import ChildComponent from "./components/ChildComponent"
import FragmentComp from "./components/fragmentComp"
// jsx, js 확장자는 생략한다.
const name = 'sseung';
const age = 30;
const array = [10, 20];
const onAdd = (x,y) => `${x} + ${y} = ${x + y}`;
const makeDOM = () => {
  <div>
    <h3>MakeDOM</h3>
    <div>Hello, World!</div>
  </div>
}
const MakeDOM = () => {
  return(
  <div>
    <h3>MakeDOM</h3>
    <div>Hello, World!</div>
  </div>
  )
}
// 4. 모든 요소는 반드시 종료태그를 가지고 있어야 한다.
// 5. undefiend, null, boolean 값은 화면에 표시되지 않는다.
function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <div>
        {/* 6. jsx에서 값을 표현식으로 표현하려면 {}를 사용해야 한다. */}
        Name: {name} <br />
        Age: {age} <br />
        Array: {array[0]} / {array[1]} / [array[2]] <br />
        onAdd: {onAdd(10, 20)} <br /> 
        {makeDOM()} <br />
        <MakeDOM/>
      </div>
      <hr />
      <ChildComponent />
      <FragmentComp></FragmentComp>
    </div>
  )
}

export default App
