{
  //error state를 활용하여 관리하는것이 좋다.
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };
  type SuccessState = {
    result: 'success';
  };
  type ResultState = SuccessState | NetworkErrorState;


  class NetworkClient {
    tryConnect(): ResultState {
      throw new Error('no network!');
    }
  }

  class UserService {
    constructor(private client: NetworkClient) { }

    login() {
      this.client.tryConnect();
    }

  }

  const client = new NetworkClient();
  const service = new UserService(client);

  class App {
    constructor(private userService: UserService) { }
    run() {
      try {
        this.userService.login();
      } catch (error) { //error를 받는 순간 error는 any타입이 되어버림
        // show dialog to user
      }
    }
  }

  const app = new App(service);
  app.run();

}

