// 5. 두 날짜 사이의 일수 구하기
function diffDays(date1, date2) {
  let answer = 0;
  const diff = Date.parse(date1) - Date.parse(date2);
  answer = diff < 0 ? -diff / 86400000 : diff / 86400000;

  console.log(answer);
}

diffDays(new Date('2021/01/01'), new Date('2021/12/31')); // => 364
