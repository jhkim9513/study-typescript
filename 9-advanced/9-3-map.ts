{

  type Video = {
    title: string;
    author: string;
    description: string;
  };
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // }

  // type VideoReadOnly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // }

  // Mapped type을 이용하면 재사용성이 높아진다!
  type Optional<T> = {
    [P in keyof T]?: T[P] // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  }
  type VideoOptional = Optional<Video>;
  /**
   * title: string;
   * author: string;
   * description: string;
   */

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: 'dog',
  }
  animal.name = 'hyun';

  /*  
  const video: ReadOnly<Video> = {
    title: 'hi',
    author: 'tom',
  }
  video.author = 'bye';   //readonly 타입이라 변경 불가
  */


  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: 'hi',
    author: null,
    description: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {  //T타입의 key를 돌면서 해당 요소를 Proxy타입으로 감싸줄수 있음
    [P in keyof T]: Proxy<T[P]>;
  };
}