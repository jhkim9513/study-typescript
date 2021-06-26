{
  type ToDo = {
    title: string;
    description: string;
  };

  function display(todo: Readonly<ToDo>) {
    // Readonly기 때문에 접근하여 변경 불가
    // todo.title = 'jaja'; // X
  }
}