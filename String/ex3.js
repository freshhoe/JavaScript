// 3. A를 #으로
function replaceAtoSharp(s) {
  let answer = '';
  const regExp = /A/g;
  answer = s.replace(regExp, '#');

  console.log(answer);
}

replaceAtoSharp('BANANA'); // => B#N#N#
