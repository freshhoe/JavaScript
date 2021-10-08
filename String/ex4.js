// 4. 대문자 찾기
function countUpperCase(s) {
  console.log(s.match(/[A-Z]+/g).length);
}
countUpperCase('KoreaTimeGood'); // => 3
