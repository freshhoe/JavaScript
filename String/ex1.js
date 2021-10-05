// 1. 유효한 펠린드롬
function isPalindrome(s) {
  let answer = false;
  const temp = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  answer = temp === [...temp].reverse().join('');
  console.log(answer);
}

isPalindrome('A man, a plan, a canal: Panama'); // => true
isPalindrome('race a car'); // => false
