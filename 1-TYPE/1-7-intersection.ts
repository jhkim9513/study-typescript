{
  /**
   * Intersection Types: & ( 다양한 타입을 모두 만족하는 타입 )
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  }

  function internWork(person: Student & Worker) {
    console.log(person.name, person.employeeId, person.work());
  }

  internWork({
    name: 'kim',
    score: 1,
    employeeId: 123,
    work: () => {},
  })
}