describe('Task', function(){
  var task = new Task('title', 'description');

  describe('should have private vars', function(){

    it('should not have access to title', function(){
      expect(task.title).toBeUndefined();
    });

    it('should not have access to description', function(){
      expect(task.description).toBeUndefined();
    });

    it('should not have access to created_at', function(){
      expect(task.created_at).toBeUndefined();
    });

  })

  describe('should have getters', function(){

    it('creating a new object should have title', function(){
      expect(task.getTitle()).toEqual('title');
    });

    it('creating a new object should have description', function(){
      expect(task.getDescription()).toEqual('description');
    });

    it('creating a new object should have created_at', function(){
      expect(task.getCreatedAt()).not.toBe('');
    });

  });
});