{
  /*
  // JavaScript  X 안좋은 예
  function jsAdd(num1, num2) {
    // 이 함수의 경우 문자열 2개를 넘겨줘도 문자열을 합친 결과를 리턴하여 의도와 맞지 않게 사용될 수 있다.
    return num1 + num2;
  }

  // TypeScript
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }



  // JavaScript  X 안좋은 예
  function jsFetchNum(id) {
    
    // * code.....
    
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript
  function tsFetchNum(id: string): Promise<number> {
  
    // * code.....
  
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }
  */
/**---------------------------------------------------------------------------------------------------- */

  // JavaScript => TypeScript
  // Optional parameter
  function printName(firstName: string, lastName?: string) {
    console.log(`firstName: ${firstName}`);
    console.log(`lastName: ${lastName}`);
  }

  printName('Steve', 'Jobs');
  printName('Tom');
  printName('Tom', undefined);

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) =>  a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}