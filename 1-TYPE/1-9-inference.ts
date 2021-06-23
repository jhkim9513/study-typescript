/**
 * Type Inference : 따로 타입을 명시하지 않아도 입력된 값으로 타입을 유추하여 설정해줌
 */
let text = 'hello';
function print(message = 'hello') {
  console.log(message);
}
print('hello');

function add(x: number, y: number): number {
  return x + y;
}
const result = add(1, 2);