// 2. 특정 달의 말일 구하기
function getLastDateOfMonth(year, month) {
  let answer = 0;
  answer = new Date(year, month + 1).toISOString().slice(8, 10);

  console.log(answer);
}

// 2021년 1월의 마지막 날은 31일
getLastDateOfMonth(2021, 0); // => 31

// 2021년 2월의 마지막 날은 28일
getLastDateOfMonth(2021, 1); // => 28
