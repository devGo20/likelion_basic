const section = document.querySelector("#calc-app"); // css 셀렉터, 블럭에 아이디 부여하고 찾아가는게 더 좋음음
const xInput = section.querySelector(".x-input");
const yInput = section.querySelector(".y-input");
const resultSpan = section.querySelector(".result-span");
const submitInput = section.querySelector(".submit-input");
// 이벤트 객체는 어떤 이벤트가 발생한 것에 따라 달라짐
submitInput.onclick = e => {
  e.preventDefault(); // 기본 행위 막아라~ post 하지마라
  const x = parseInt(xInput.value); // 문자열
  const y = parseInt(yInput.value); // 문자열
  const result = x + y;
  resultSpan.textContent = result;
};
