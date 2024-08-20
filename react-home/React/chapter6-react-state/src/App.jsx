import { useState } from 'react'
import Counter from './components/Counter';
import Lighter from './components/Lighter';
import MyState from './components/MyState';
// 1. state가 변경되면 화면이 re-rendering 된다.
// 2. 부모 컴포넌트에서 자식 컴포넌트로 데이터를 전달하는 Props와 달리, state는 자식 컴포넌트에서만 사용할 수 있는 전역변수이다.
// 3. state가 여러개일 경우 계속 re-rendering이 발생하기 때문에, 분리해야 한다.
// 4. 페이지가 re-rendering 되는 3가지 이유
  // 1) Props가 변경되면
  // 2) state가 변경되면
  // 3) 부모 component가 변경되면
function App() {
  console.log('update');
  return (
    <>
      <MyState />

    </>
  )
}

export default App
