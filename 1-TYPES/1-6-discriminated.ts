{
  /**
   * Discriminated Union : Union의 두 케이스에서 다른 값을 가진 공통 키를 통해 구별해내는 방법
   */
  // function: login -> success or fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    };
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;
  async function login(id: string, password: string): Promise<LoginState> {
    try {
      // login(id, password) code ...
      return {
        result: 'success',
        response: {
          body: 'Login Success!',
        },
      };
    } catch (err) {
      return {
        result: 'fail',
        reason: err,
      };
    }
  }

  // printLoginState(state)
  // if success -> 🎉 body
  // if fail -> 😭 reason
  function printLoginState(state: LoginState) {
    if (state.result === 'success') {
      console.log(`🎉 ${state.response.body}`);
    } else {
      console.log(`😭 ${state.reason}`);
    }
  }
}
