// 6. 2개의 Date 객체가 같은 년도/월/날짜를 가리키는지 확인하기
function isEqualDate(date1, date2) {
  let answer = false;
  answer = Date.parse(date1) === Date.parse(date2) ? true : answer;
  console.log(answer);
}

isEqualDate(new Date('2021/07/24'), new Date('2021/07/24')); // => true
isEqualDate(new Date('2021/07/24'), new Date('2022/07/2')); // => false
