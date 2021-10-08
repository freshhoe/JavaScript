// 3. 1일의 요일을 나타내는 정수(0 ~ 6) 구하기.
// 0은 일요일이고 6은 토요일이다.
function getFirstDayOfMonth(year, month) {
  console.log(new Date(year, month).getDay());
  // return new Date(year, month).getDay();
}

// 2021년 1월 1일은 금요일
getFirstDayOfMonth(2021, 0); // => 5

// 2021년 12월 1일은 수요일
getFirstDayOfMonth(2021, 11); // => 3

// 2010년 10월 1일은 금요일
getFirstDayOfMonth(2021, 9); // => 5
