describe('Todo List', function(){

  it('Should have a empty task list when is a new object', function(){
    var todo = new Todo();
    expect(todo.getTasks()).toEqual([]);
  });

  it('Should add a Task', function(){
    var todo = new Todo();
    var task = { title: 'Task', description: 'This is a Task', created_at: new Date() };

    todo.add(task);

    expect(todo.getTasksSize()).toEqual(1);
    expect(todo.getTasks()).toContain(task);
  });

});