{
  function checkNotNullBad(arg: number | null):number {
    if(arg == null) {
      throw new Error('not vaild number!');
    }
    return arg;
  }
  
  function checkNotNullAnyBad(arg: any | null):any {
    if(arg == null) {
      throw new Error('arg is null');
    }
    return arg;
  }

  // GENERIC 타입의 이름은 보편적으로 TYPE의 앞글자인 T를 사용하는 편이다.
  function checkNotNull<T>(arg: T | null): T {
    if(arg == null) {
      throw new Error('arg is null');
    }
    return arg;
  }
  // 숫자를 인자로 보내기에 타입이 number가 된다.
  const number = checkNotNull(123);
  // true도 타입으로 인정되기 때문에 이를 피하기위해 boolean 타입지정을 해준다.
  const boal: boolean = checkNotNull(true);

}