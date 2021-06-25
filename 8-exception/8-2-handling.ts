{
  class TimeoutError extends Error { }
  class OfflineError extends Error { }

  class NetworkClient {
    tryConnect(): void {
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

