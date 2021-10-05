// 2. 신규 아이디 추천
function solution(new_id) {
  const recommended = new_id
    .toLowerCase()
    .replace(/[^\w-_.]+/g, '')
    .replace(/(\.)\1+/g, '.')
    .replace(/^\.|\.$/, '')
    .replace(/^$/, 'a')
    .replace(/^.{16,}$/, match => match.slice(0, 15))
    .replace(/\.$/, '')
    .replace(
      /^.{1,2}$/,
      match => match + match[match.length - 1].repeat(3 - match.length)
    );

  return recommended;
}
console.log(solution('...!@BaT#*..y.abcdefghijklm'));
console.log(solution('z-+.^.'));
console.log(solution('=.='));
console.log(solution('123_.def'));
console.log(solution('abcdefghijklmn.p'));

// "bat.y.abcdefghi"
// "z--"
// "aaa"
// "123_.def"
// "abcdefghijklmn"
