import React, {useState} from 'react';
import useInputValue from '../hooks/useInputValue'
// 1. Hook는 함수 컴포넌트 혹은 Custom Hook 안에서만 호출 가능하다.
// warning: Invalid hook call. Hooks can only be called inside of the body of a function component.
// const [count, setCount] = useState(); <= 함수 밖이라서 오류
// const myChange = () => {
//   const [state,setState] = useStaete(0);
// }
// function getInputValue() {
function MyHook(props) {
  const [input, myChange] = useInputValue();
  // 2. Hook는 조건문이나 반복문 내부에서 호출될 수 없다.
  // if(true) {
  //   const [state, setState] = useState(0);
  // }
  // 3. 나만의 Hook를 만들 수 있다. 이 때 반드시 useXxx()로 시작하지 않아도 되지만, 권장은 useXxx()로 시작하면 다른 Hook와 같다.
  return (
    <div>
      <input type="text" onChange={myChange} value={input} />
    </div>
  );
}

export default MyHook;