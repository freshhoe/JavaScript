// 4. 대문자 찾기
function countUpperCase(s) {
  let answer = 0;
  const regExp = /[A-Z]+/g;
  answer = s.match(regExp).length;

  console.log(answer);
}
countUpperCase('KoreaTimeGood'); // => 3
