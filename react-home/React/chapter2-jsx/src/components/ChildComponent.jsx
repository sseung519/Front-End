//rsf 단축어
function ChildComponent() {
  return (
    <div>
      <h3>Child Component</h3>
      {/* 반드시 images 폴더는 public 폴더 하위에 */}
      <img src="images/1.jpeg"/>
    </div>
  );
//rsf 단축어
}

//하나만 return할 때 default
export default ChildComponent;