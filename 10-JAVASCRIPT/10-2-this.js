console.log(this);

function simpleFunc() {
  console.log(this);
}
simpleFunc(); // window.simpleFunc();

//* class에서의 this는 자기자신을 참조한다.
class Counter {
  count = 0;
  increase = function () {
    console.log(this);
  };
}
const counter = new Counter();
counter.increase();
const caller = counter.increase;
caller(); // undefined
//* => let 과 const로 선언한 변수는 window 객체에 등록되어있지 않기 때문에, caller가 호출하는 this는 그 어떤 객체도 아니기 때문에 undefined를 리턴하게 된다.

//* 만약 counter의 this가 어디서 호출되던 간에 counter만을 가리키도록 하고 싶다면 bind 메소드를 이용해야 한다!
const bindCaller = counter.increase.bind(counter);
bindCaller();

//* counter의 this가 항상 counter만을 바라보고 싶게 만들고 싶다면 화살표 함수를 이용하자!
class ArrowCounter {
  count = 0;
  increase = () => {
    console.log(this);
  };
}
const arrow = new ArrowCounter();
const arrowCaller = arrow.increase;
arrowCaller();

class Bob {}
const bob = new Bob();
bob.run = counter.increase;
bob.run();
