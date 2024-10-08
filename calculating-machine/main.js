// 개발자 원두는 회사에서 덧셈 계산기를 만들어오라는 업무를 지시받았습니다.
// 하지만 만들어간 덧셈 계산기는 제대로 작동하지 않았고
// 선배에게 피드백으로 ‘문자열은 숫자로 변환해야지!’라는 말을 듣게 됩니다.
// 그래서 원두는 계산기에 입력된 값이 어떤 타입인지 확인하는 함수를 만들어보려 합니다.
// 입력값이 num1과 num2로 주어질 때 입력된 값이
// 각각 어떤 타입인지를 return하는 함수 solution을 만들어주세요.

function solution(num1, num2) {
  let result1 = typeof num1;

  let result2 = typeof num2;

  let result3 = `${result1} ${result2}`;

  return result3;
}

let result = solution(1, '1');
console.log(result);
