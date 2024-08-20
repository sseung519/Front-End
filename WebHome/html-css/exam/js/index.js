const answers = [11, 5, 43, 5, 11];
const nameInput = document.querySelector('.nameInput');
const resultmessage = document.querySelector('.resultmessage');
const resultContainer = document.querySelector('.result');
function checkAnswer() {
  const inputs = document.querySelectorAll('input[type="number"]');
  let score = 0;

  for (let i = 0; i < inputs.length; i++) {
    const userAnswer = parseInt(inputs[i].value); 

    if (userAnswer === answers[i]) {
      score++;
    } else {
      inputs[i].style.backgroundColor = "red";
      inputs[i].style.color = "white"; 
    }
  }

  const today = new Date();
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = today.toLocaleDateString('ko-KR', options);

const resultFieldset = document.querySelector('.resultmessage');
resultFieldset.innerHTML = '';


const resultMessage = document.createElement('p'); 
resultMessage.innerHTML = `${nameInput.value}님의 ${formattedDate} 계산 퀴즈 결과<br>총 5문제 중 ${5 - score}개를 틀렸습니다.<br /><br /> 틀린 답은 빨간색으로 표시 하였습니다. <br /><br />최종 점수는 <span style="color: red; font-size: 20px">${20 * score}점</span>입니다.`;

resultFieldset.appendChild(resultMessage);
resultContainer.style.display = "block";
}

document.getElementById('submitButton').addEventListener('click', checkAnswer);