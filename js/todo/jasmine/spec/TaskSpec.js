describe('Task', function(){
  var task = new Task('title', 'description');

  it('creating a new object should have title', function(){
    expect(task.getTitle()).not.toBe('');
  });

  it('creating a new object should have description', function(){
    expect(task.getTitle()).not.toBe('');
  });

  it('creating a new object should have created_at', function(){
    expect(task.getCreatedAt()).not.toBe('');
  });
});