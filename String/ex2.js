// 2. 신규 아이디 추천
function solution(new_id) {
  const recommended = new_id
    .toLowerCase()
    .replace(/[^\w-_.]+/g, '')
    .replace(/(\.)\1+/g, '.')
    .replace(/^\.|\.$/g, '')
    .replace(/^$/g, 'a')
    .replace(/^.{16,}$/g, match => match.slice(0, 15))
    .replace(/\.$/g, '')
    .replace(
      /^.{1,2}$/g,
      match => match + match[match.length - 1].repeat(3 - match.length)
    );

  return recommended;
}
console.log(solution('...!@BaT#*..y.abcdefghijklm')); // "bat.y.abcdefghi"
console.log(solution('z-+.^.')); // "z--"
console.log(solution('=.=')); // "aaa"
console.log(solution('123_.def')); // "123_.def"
console.log(solution('abcdefghijklmn.p')); // "abcdefghijklmn"
