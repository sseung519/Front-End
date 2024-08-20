import React, {useState} from 'react';

const Register = () => {
  // 1. State 모두 합치기
  const [input, setInput] = useState({
    name: '',
    birth: '',
    city: '',
    age: 0,
    gender: '',
  });
  
  // 2. EventHandler 합치기
  const onMyChange = (evt) => {
    setInput({
      ...input,
      [evt.target.name] : evt.target.value 
    })
  }


  // const changeName =(evt) => setInput({
  //   ...input, name: evt.target.value
  // });
  // const changeBirth = (evt) => setInput({
  //   ...input, birth: evt.target.value
  // });
  // const changeCity = (evt) => setInput({
  //   ...input, city: evt.target.value
  // });
  // const changeAge = (evt) => setInput({
  //   ...input, age: evt.target.value
  // });
  console.log(input);
  const cityArray = ['Seoul', 'Busan', 'Incheon', 'Daegun', 'Gwangju'];
  const onSubmit = () => {
    const result = `<ul>
<li>이름:${input.name}</li>
<li>출생:${input.birth}</li>
<li>거주지:${input.city}</li>
<li>나이:${input.age}</li>
<li>성별:${input.gender}</li>
</ul>`;
    document.querySelector('#result').innerHTML = result;
  }
  return (
    <div>
      <form>
        <p>Name : <input type="text" name ='name' onChange={onMyChange}
        placeholder='이름을 입력해주세요' /></p>  
        <p>Birth : <input type="date" name='birth' onChange={onMyChange}/></p>
        <p>City : 
          <select name='city' onChange={onMyChange}>
            <option value="">--Choosse--</option>
            {cityArray.map((item, index) => <option key={index} value={item}>{item}</option>)}
           
           
          </select>
         </p>
        <p>Age : <input type="number" max="60" name='age' onChange={onMyChange} /></p>
        <p>Gender : 
          <input type="radio" name='gender' value='남성' onChange={onMyChange} />Male&nbsp;&nbsp;
          <input type="radio" name='gender' value='여성' onChange={onMyChange} />Female
        </p>
        <p><button type="button" onClick={onSubmit}>가입하기</button></p>
      </form>
      <hr />
      <div id='result'>결과는 여기에</div>
    </div>
  );
};

export default Register;