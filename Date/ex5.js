// 5. 두 날짜 사이의 일수 구하기
function diffDays(date1, date2) {
  console.log(Math.abs(Date.parse(date1) - Date.parse(date2)) / 86400000);
  // return Math.abs((Date.parse(date1) - Date.parse(date2)) / 86400000);
}

diffDays(new Date('2021/01/01'), new Date('2021/12/31')); // => 364
