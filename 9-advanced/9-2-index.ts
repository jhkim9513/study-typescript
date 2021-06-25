{
  const obj = {
    name: 'tom',
  }
  obj.name; // tom
  obj['name']; // tom

  type Animal = {
    name: string;
    age: number;
    gender: 'male' | 'female';
  };

  type Name = Animal['name'] // string
  const text: Name = 'hello';

  type Gender = Animal['gender']; // 'male' | 'female'

  type Keys = keyof Animal; // 'name' | 'age' | 'gender'
  const key: Keys = 'name';

  type Person = {
    name: string;
    gender: Animal['gender'];
  };
  const Person: Person = {
    name: 'tom',
    gender: 'male',
  }
}