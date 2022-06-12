{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // 왠만한 map type은 이미 구현되어 있다!
    todo.title = 'jaja';
  }
}
