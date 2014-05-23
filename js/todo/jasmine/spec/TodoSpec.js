describe('Todo List', function(){
  var todo;

  beforeEach(function(){
    todo = new Todo();
  })

  it('Should have a empty task list when is a new object', function(){
    expect(todo.getTasks()).toEqual([]);
  });

  describe('Add new Task to Todo', function(){
    it('Should add a Task', function(){
      var task = { title: 'Task', description: 'This is a Task', created_at: new Date() };

      todo.add(task);

      expect(todo.getTasksSize()).toEqual(1);
      expect(todo.getTasks()).toContain(task);
    });
  });

  describe('List all tasks', function(){
    it('Should list all tasks', function(){
      var task = { title: 'Task', description: 'This is a Task', created_at: new Date() };
      var task_two = { title: 'Task', description: 'This is a Task', created_at: new Date() };

      todo.add(task);
      todo.add(task_two);

      expect(todo.getTasks()).toContain(task, task_two)
    });
  });

  describe('Find a task', function() {

    it('Should find a single task by index', function(){
      var task = { title: 'Task', description: 'This is a Task', created_at: new Date() };
      todo.add(task);

      var result = todo.getTask(0);
      expect(result).toBe(task);
    });


    it('Should find task by title or description', function(){
      var task = { title: 'Task', description: 'This is a Task', created_at: new Date() };
      todo.add(task);

      var result = todo.findTask('Task');
      expect(result).toBe(task);

      var result = todo.findTask('This is a Task');
      expect(result).toBe(task);
    });

    it('Should return not found', function(){
      var task = { title: 'Task', description: 'This is a Task', created_at: new Date() };
      todo.add(task);

      var result = todo.findTask('titlezzzz');

      expect(result).toEqual('not found');
    })
  });

  describe('Destroy a Task', function() {
    it('Return message when task does not exists', function(){
      expect(todo.destroy('Task')).toEqual('not found');
    });
    it('Should destroy', function(){
      var task = { title: 'Task', description: 'This is a Task', created_at: new Date() };
      todo.add(task);

      todo.destroy('Task');

      expect(todo.getTasks()).not.toContain(task)
      expect(todo.getTasksSize()).toEqual(0);
    })

  });

});