{
  /*
   * Type Aliases  : type을 직접 설정할 수 있음
   */
  type Text = string;
  const name: Text = 'kim';
  const address: Text = 'korea';
  type Num = number;
  type Student = {
    name: string,
    age: number;
  };
  const student: Student = {
    name: 'kim',
    age: 29,
  }

  /**
   * String Literal Types : 다양한 원시타입 또는 값 자체를 타입으로 설정가능!
   */
  type Name = 'name';
  let kimName: Name;
  kimName = 'name';
  type JSON = 'json';
  const json: JSON = 'json';

  type Boal = true;
  const isCat: Boal = true;  //false할당시 에러

}