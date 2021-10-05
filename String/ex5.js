// 5. 문자 찾기
function count(string, s) {
  let answer;
  const regExp = new RegExp(`${s}`, 'g');
  answer = string.match(regExp).length;

  console.log(answer);
}
count('COMPUTERPROGRAMMING', 'R'); // => 3
