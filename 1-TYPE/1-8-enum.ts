{
  /**
   * Enum : 여러가지 관련된 상수 값들을 한 곳에 모아서 정의
   */
  // JavaScript에는 존재하지 않아 TypeScript에서 자체 제공
  const MAX_NUM = 7;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
  const dayOfToday = DAYS_ENUM.MONDAY;

  //TypeScript  <= 다른 언어에서는 유용하지만 타입스크립트에서는 가급적 사용 안하는것이 좋다
  // enum타입은 enum타입이지만 그냥 숫자타입을 대입할 수도있어서 정교하지 않다.
  // 모바일 클라이언트, 안드로이드에서는 Union을 사용할 수 없기에 Enum을 사용한다.
  enum Days {
    Monday, //0
    Tuesday, //1
    Wednesday, //2
    Thursday, //3
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Tuesday);
  const day = Days.Saturday;
  console.log(day);

  //아래와같이 Union Type으로 대체하여 사용한다.
  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';
  let dayOfweek: DaysOfWeek = 'Monday';
  dayOfweek = 'Wednesday';
}