/* 
2. 배달 앱에서 중국 음식을 시키려고 합니다. 메뉴에서 음식을 골라 수량을 선택하고 
총 가격을 알아낸 다음 주문하려고 합니다. 이를 order라는 함수를 사용해 구현해보세요.

조건:
배달 한번에 10개 이상의 음식은 주문하지 못합니다.
배달 한번에 최소 주문 금액은 5000원입니다.
배달료는 5000원 이상일 경우 2500원, 12000원 이상일 경우에는 무료입니다.

order의 리턴값 형식 예시
const result = totalPrice + deliveryCharge // number
*/

const menu = {
  jjambbong: 4000,
  jjajangmyeon: 5000,
  tangsuyuk: 12000,
};

// 주문 갯수에 따라 가격이 달라지므로, 매개변수로 설정
function order(a, b, c) {
  let result = 0;
  let totalPrice =
    menu.jjambbong * a + menu.jjajangmyeon * b + menu.tangsuyuk * c;
  if (10 > a + b + c) {
    totalPrice > 12000
      ? (result = totalPrice)
      : totalPrice > 5000
      ? (result = totalPrice + 2500)
      : (result = '최소 주문금액은 5,000원 입니다.');
  } else result = '죄송합니다. 10개 이상은 주문할 수 없습니다.';
  console.log(result);
}
// When the function is called, the result is displayed on the right 👉
order(1, 1, 0);
order(2, 3, 0);
