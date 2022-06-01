{
  /**
   * Union Types === OR
   */
  // String Literal Types를 사용하는 예시
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // function: login -> success or fail
  type SuccessState = {
    response: {
      body: string;
    };
  };
  type FailState = {
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  async function login(id: string, password: string): Promise<LoginState> {
    try {
      // login(id, password) code ...
      return {
        response: {
          body: 'Login Success!',
        },
      };
    } catch (err) {
      return {
        reason: err,
      };
    }
  }

  // printLoginState(state)
  // if success -> 🎉 body
  // if fail -> 😭 reason
  function printLoginState(state: LoginState) {
    //* state 안에 response가 존재할 수도 있고 존재하지 않을 수도 있기 때문에 아래 코드는 좋지 않은 코드
    //* 더 좋고 직관적인 코드는 뒤에 이어지는 Discriminated Union에서 공통적인 타입 값으로 차별화를 통해 만들 수 있음!!
    if ('response' in state) {
      console.log(`🎉 ${state.response.body}`);
    } else if ('reason' in state) {
      console.log(`😭 ${state.reason}`);
    }
  }
}
