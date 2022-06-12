{
  type ToDo = {
    title: string;
    description: string;
    label: string;
    priority: 'high' | 'low';
  };

  function updateTodo(todo: ToDo, fieldsToUpdate: Partial<ToDo>): ToDo {
    return { ...todo, ...fieldsToUpdate };
  }
  const todo: ToDo = {
    title: 'learn TS',
    description: 'study hard',
    label: 'study',
    priority: 'high',
  };
  const newToDo = updateTodo(todo, { priority: 'low' });
  console.log(newToDo);
}
