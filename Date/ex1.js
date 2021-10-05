// 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기
function formatDate(Date) {
  let answer = '';
  answer = Date.toISOString().slice(0, 10);
  console.log(answer);
}

formatDate(new Date('2021/07/24')); // => "2021-07-24"
formatDate(new Date('1900/1/4')); // => "1900-01-04"
