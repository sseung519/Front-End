import Button from "./components/Button"
import Header from "./components/Header"
import Nav from "./components/Nav"
import Article from "./components/Article"
import MyComponent from "./components/MyComponent"
import YourComponent from "./components/YourComponent"
function App() {
  const employee = {age: 30};
  // const array = [1,2,3];
  // const node = <h1>Node</h1>
  // const func = () => {console.log('메시지')};
  // const student = {
  //   name: "지민",
  //   age: 28
  // }
  // const topics = [
  //   {id:1, title: 'html5', body: 'html5 is ...'},
  //   {id:2, title: 'css3', body: 'css3 is ...'},
  //   {id:3, title: 'JavaScript', body: 'JavaScript is ...'},
  // ];
  // const buttonProps = {
  //   title : 'Red',
  //   color : 'red'
  // }
  return (
    <>
     {/* <Button title={'Red'} color={'red'} /> */}
     {/* <Button {...buttonProps} />
     <Button title={'Green'} color={'green'} />
     <Button title={'Blue'} color={'blue'} />
     <Button title={'lightskyblue'}>
      <div>자식 요소</div>
     </Button> */}
     {/* <Header title="React" />
     <Nav topics={topics} />
     <Article title="Welcome" body="Hello, WEB" /> */}

     {/* <MyComponent stringValue={'씅찬'} booleanValue={1 == 1}
     numberValue = {30} arrayValue = {array} nodeValue={node} functionValue={func} objectValue={student} /> */}

     <YourComponent objValue={employee} requiredStringValue='문자' />
    </>
  )
}

export default App
