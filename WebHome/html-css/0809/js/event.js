window.addEventListener('load', init, false);
//HTML의 모든 Element가 메모리에 로딩한 후
function init() {
  button = document.getElementsByTagName('button')[0];
  button.addEventListener('click', myClick, false);
}


function myClick(evt) {
  console.log(evt);
}
