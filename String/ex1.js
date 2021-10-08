// 1. 유효한 펠린드롬
function isPalindrome(s) {
  const temp = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  console.log(temp === [...temp].reverse().join(''));
}

isPalindrome('A man, a plan, a canal: Panama'); // => true
isPalindrome('race a car'); // => false
