{
  // Array
  const fruits: string[] = ['apple', 'banana'];
  const scores: Array<number> = [1, 2, 3]; 

  // readonly 해당 요소를 변경 할 수 없고 읽기만 가능함 (불변성 제공)
  // 단, readonly 사용시 readonly Array<number> 처럼 제네릭은 사용 불가
  function printArray(fruits: readonly string[]) {

  }
}