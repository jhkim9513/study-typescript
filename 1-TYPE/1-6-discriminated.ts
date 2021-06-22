{
  // function: login -> success, fail
  type SuccessState = {
    result: 'success';
    response: {
      body: string;
    }
  };
  type FailState = {
    result: 'fail';
    reason: string;
  };
  type LoginState = SuccessState | FailState;

  function login(): LoginState {
    return {
      result: 'success',
      response: {
        body: 'logged in!',
      },
    }
  }

  // printLoginState(state: LoginState)
  // success -> body
  // fail -> reason
  function printLoginState(state: LoginState):void {
    if(state.result === 'success') { //success or fail
      console.log(`success! ${state.response.body}`);
    } else {
      console.log(`fail... ${state.reason}`);
    }
  }
}