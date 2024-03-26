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

let totalPrice = 0;
let deliveryPrice = 2500; // 배달료 구간이 하나밖에 없으므로

let costArr = [menu.jjambbong, menu.jjajangmyeon, menu.tangsuyuk];

// 주문 갯수에 따라 가격이 달라지므로, 매개변수로 설정
function order(jjambbongCnt, jjajangmyeonCnt, tangsuyukCnt) {
  // 객체의 요소를 반복문으로 추출
  let menuArr = [];
  for (let i = 0; i < menu.length; i++) {
    menuArr.push(menu[i]); // jjambbong, jjajangmyeon, tangsuyuk
  }

  // 메뉴 선택에 따른 비용과 남은 선택 갯수
  let orderCnt = jjambbongCnt + jjajangmyeonCnt + tangsuyukCnt;
  if (orderCnt <= 9) {
    totalPrice += jjambbongCnt * costArr[0];
    totalPrice += jjajangmyeonCnt * costArr[1];
    totalPrice += tangsuyukCnt * costArr[2];
    // 총 주문 금액에 따라 배달료 부과
    // 최소 주문금액이 5000원이므로 if - else로 구분하려 했으나,
    // 조건식 간결화를 위해 if - else if문으로 채택!
    if (totalPrice >= 12000) deliveryPrice = 0;
    else if (totalPrice >= 5000) deliveryPrice;
    else console.log(`최소 주문금액은 5,000원 입니다.`);
    result = totalPrice + deliveryPrice;
    console.log(result);
  }
  // 10개 이상은 주문할 수 없음.
  if (orderCnt >= 10)
    console.log(`죄송합니다. 10개 이상은 주문할 수 없습니다.`);
}
// When the function is called, the result is displayed on the right 👉
order(1, 1, 0);
order(2, 3, 0);
