{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1, 2, 3]; 

  // readonly 해당 요소를 변경 할 수 없고 읽기만 가능함 (불변성 제공)
  // 단, readonly 사용시 readonly Array<number> 처럼 제네릭은 사용 불가
  function printArray(fruits: readonly string[]) {}

  // Tuple ( 배열이지만 서로 다른 타입의 데이터를 담을 수 있음 )  <= 사용 권장하지 않음
  // 이것은 interface, type alias, class 등으로 대체하여 사용
  let student: [string, number];
  student = ['name', 123];
  // 아래처럼 가독성이 떨어짐
  student[0] // name
  student[1] // 123
  // 아래처럼 명시해주는것이 좋음
  const [name, age] = student;
}