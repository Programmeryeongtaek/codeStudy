/* 
1. 여러 개의 학생 정보중에 90점 이상인 학생들은 '금메달', 
80점 이상인 학생들은 '은메달', 70점 이상인 학생들은 '동메달', 
그리고 나머지 학생들은 '성실상'을 주려고 합니다.
이를 동작하게 하는 award 함수를 사용해 구현해보세요!

조건:
금메달, 은메달, 동메달은 각각 몇 명 정도가 수상했는지도 알고 싶습니다.
학생 아이디가 7이상인 학생들은 수상에서 제외합니다.

award의 리턴값 예시
const result = {
  gold: 0, // number
  silver: 0, // number
  bronze: 0, // number
  result: awardedStudents // 배열 안 객체
}
*/

const students = [
  { id: '1', score: '80' },
  { id: '2', score: '65' },
  { id: '3', score: '70' },
  { id: '4', score: '62' },
  { id: '5', score: '100' },
  { id: '6', score: '92' },
  { id: '7', score: '67' },
  { id: '8', score: '78' },
];
// 성실상에 대해서는 카운트 하지 않으므로 변수 선언x
let gold = 0;
let silver = 0;
let bronze = 0;
let awardedStudents = [];

const award = (students) => {
  // 배열의 요소들을 하나씩 추출한다.
  let studentInfo = '';
  // id >= 7이상의 경우는 제외
  for (let i = 0; i < students.length - 2; i++) {
    studentInfo = students[i];
    // {id: "1", score: "80"}, ........
    let score = Number(studentInfo.score); // 결과값이 문자열로 나오므로 Number()사용
    // 80 65 70 62 100 92

    // if-else if 문을 통해 조건식 간소화
    if (score >= 90) gold++;
    else if (score >= 80) silver++;
    else if (score >= 70) bronze++;

    // 상을 받은 학생들의 기록만 남기므로 70점 이상만 체크
    if (score >= 70) awardedStudents.push(studentInfo);
  }
  return (result = {
    gold,
    silver,
    bronze,
    result: awardedStudents,
  });
};

award(students);
