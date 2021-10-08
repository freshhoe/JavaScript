// 5. 문자 찾기
function count(string, s) {
  const regExp = new RegExp(`${s}`, 'g');
  console.log(string.match(regExp).length);
}
count('COMPUTERPROGRAMMING', 'R'); // => 3
