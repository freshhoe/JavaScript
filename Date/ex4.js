// 4. 말일의 요일을 나타내는 정수(0 ~ 6) 구하기.
// 0은 일요일이고 6은 토요일이다.
function getLastDayOfMonth(year, month) {
  console.log(new Date(year, month + 1).getDay() - 1);
  // return new Date(year, month + 1).getDay() - 1;
}

// 2021년 1월 말일은 일요일
getLastDayOfMonth(2021, 0); // => 0

// 2021년 12월 말일은 금요일
getLastDayOfMonth(2021, 11); // => 5
