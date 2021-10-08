// 7. 문자열 압축
function compress(string) {
  console.log(string.replace(/(.)\1+/g, match => match[0] + match.length));
}
compress('ABBCCCE'); // => AB2C3E
