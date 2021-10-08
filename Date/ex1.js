// 1. Date 객체를 ‘yyyy-mm-dd’ 형식의 문자열로 변환하기
function formatDate(Date) {
  console.log(Date.toISOString().slice(0, 10));
  // return Date.toISOString().slice(0, 10);
}

formatDate(new Date('2021/07/24')); // => "2021-07-24"
formatDate(new Date('1900/1/4')); // => "1900-01-04"
