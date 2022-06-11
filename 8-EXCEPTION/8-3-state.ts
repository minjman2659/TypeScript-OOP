{
  type SuccessState = {
    result: 'success';
  };

  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };

  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {
      return {
        result: 'fail',
        reason: 'down',
      };
    }
  }

  class UserService {
    constructor(private client: NetworkClient) {}

    login(): ResultState {
      return this.client.tryConnect();
      // login ...
    }
  }
  //* 에러가 발생할 경우, App단에서 catch를 해서 에러를 처리하는 것이 더 좋다!
  //* 왜냐하면 더 깊숙한 곳에서 에러 처리를 진행할 경우, App 단에서는 에러가 발생했는지 여부를 파악할 수 없기 때문에!
  class App {
    constructor(private userService: UserService) {}

    run() {
      try {
        const state = this.userService.login();

        switch (state.result) {
          case 'success':
            console.log('로그인 성공!');
            break;
          case 'fail':
            console.log(`로그인 실패: ${state.reason}`);
            break;
        }
      } catch (err) {
        console.log(err);
      }
    }
  }

  const client = new NetworkClient();
  const service = new UserService(client);
  const app = new App(service);
  app.run();
}
