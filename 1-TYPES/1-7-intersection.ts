{
  /**
   * Intersection Types === AND
   */
  type Student = {
    name: string;
    score: number;
  };
  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId, person.work());
  }
  //* internWork의 매개변수 person은 And 속성을 가지는 intersection type 이기 때문에 Student와 Worker의 모든 값을 가져야만 한다.
  internWork({
    name: 'kim',
    score: 12,
    employeeId: 1,
    work: () => {},
  });
}
