function Button({title, color, children}) {
  // console.log(props)
  
  return (
    <div>
      <button style={{'backgroundColor': color}}>{title}{children}</button>
    </div>
  );
}
// Properties의 기본값 설정
Button.defaultProps = {
  color : 'lightskyblue',
}

export default Button;