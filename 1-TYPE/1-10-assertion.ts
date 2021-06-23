{
  /**
   * Type Assertions : 타입을 강요할 때 사용  <-가급적 사용하지 않는게 좋다
   */
  function jsStrFunc(): any {
    return 'hello';
  }
  //분명 hello를 반환하기때문에 result는 문자열이지만 any타입이다
  //any타입이라서 문자관련 함수를 사용할 수 없다.
  const result = jsStrFunc();

  //하지만 result가 문자열이라는것을 확신하고있기 때문에 문자열함수를 사용하기위해서 타입을 강요할 수 있는데
  console.log((result as string).length);

/**------------------------------------------------------------------------------------------------- */
  // 만약 숫자를 반환하는 any타입 함수인데
  function jsNumFunc(): any {
    return 5;
  }
  const result2 = jsNumFunc();
  // string 타입으로 캐스팅하여 사용한다면
  //따로 에러발생없이 undefined를 반환하기 때문에 문제가 생길 수 있고 
  console.log((result2 as string).length); // undefined
  
  //아래의 경우 배열로 캐스팅한다면 컴파일 단계에서는 에러가 발생하지 않으나 런타임환경에서 에러가 발생하는 문제가 생길 수 있다.
  console.log((result as Array<number>).push(1));

  /**------------------------------------------------------------------------------------------------- */
  function findNumbers(): number[] | undefined {
    return undefined;
  }
  const numbers = findNumbers()!; //  '!'를 붙이면 절대 null이나 undefined가 아니야!! 값이 있어!! 라고 선언하는것 '위험'
  numbers.push(2);  
  
}