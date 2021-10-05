// 6. 대소문자 변환
function toggleCase(string) {
  let answer = '';
  answer = string.replace(/([a-z]+)|([A-Z]+)/g, (_, lowerCase, upperCase) =>
    lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase()
  );
  console.log(answer);
}
toggleCase('StuDY'); // => 'sTUdy'
