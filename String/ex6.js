// 6. 대소문자 변환
function toggleCase(string) {
  console.log(
    string.replace(/([a-z]+)|([A-Z]+)/g, (_, lowerCase, upperCase) =>
      lowerCase ? lowerCase.toUpperCase() : upperCase.toLowerCase()
    )
  );
}
toggleCase('StuDY'); // => 'sTUdy'
