{
  /**
   * Type Aliases
   */
  type Text = string;
  const name: Text = 'kim';

  type Num = number;

  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: 'kim',
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = 'name';
  let kim: Name;
  kim = 'name';
  type JSON = 'json';
  const json: JSON = 'json';
}
