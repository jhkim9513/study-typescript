{
  /*
  * JavaScript
  * Primitive: number, string, boolean, bigint, symbol, null, undefined
  * Object: function, array.....
  */

  // number
  const num:number = -7;

  // string
  const str:string = 'hi';

  // boolean
  const boal:boolean = true;

  // undefined ( 비어있는지 아닌지 아직 결정되지 않은 상태 )  
  let name : undefined  // X 단독적으로 선언하지는 않음
  let age: number | undefined; //number타입 또는 undefined
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  // null ( 비어있는 상태로 결정 )
  let person1: null // X 단독적으로 선언하지는 않음
  let person2: string | null;

  // unknown : 알 수 없음 <- 가능하면 사용하지 말것!
  // 존재하는 이유는 javascript에서 타입을 알 수 없는것을 리턴하는 경우가 있기 때문
  let notSure: unknown = 0;
  notSure = 'hi';
  notSure = true;

  // any : 어떤것도 담을 수 있음! <- 마찬가지로 가능하면 사용하지 말것!
  let anything: any = 0;
  anything = 'hi';

  // void : 아무것도 리턴하지 않는것 (생략가능)
  function print(): void {
    console.log('hi');
    return;
  }
  let unusable: void = undefined;  //변수에는 void타입을 선언 시 undefined밖에 못쓰기때문에 사용하지 않음

  // never : 절대 리턴할 수 없는 상태
  function throwError(message: string): never {
    // message -> server로 보내서 log를 남김 그리고 실제로 리턴하는것은 없음
     throw new Error(message); //error를 던져서 어플이 멈춤 
    /* while(true) 무한 루프 */
  }

  // object : 오브젝트, 배열등 어떠한 타입도 다 담을 수 있음 <- 가능하면 사용하지 말고 더 구체적인 타입을 지정해서 사용하기
  let obj: object; 
  function acceptSomeObject(obj: object) {

  }
  acceptSomeObject({name: 'tom'});
  acceptSomeObject({food: 'pizza'});

}