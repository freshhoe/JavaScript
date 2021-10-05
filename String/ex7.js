// 7. 문자열 압축
function compress(string) {
  let answer = '';
  const regExp = /(.)\1+/g;
  answer = string.replace(regExp, match => match[0] + match.length);

  console.log(answer);
}
compress('ABBCCCE'); // => AB2C3E
