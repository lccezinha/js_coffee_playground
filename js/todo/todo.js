function Todo(){
  var tasks = [];

  this.add = function(task){
    tasks.push(task);
  }

  this.getTasks = function(){
    return tasks;
  }

  this.getTasksSize = function(){
    return tasks.length;
  }

  this.getTask = function(index){
    return tasks[index];
  }

  this.findTask = function(query){
    for(var i = 0; i < this.getTasksSize(); i++){
      console.log(this.getTask(i)['title'])
      if(query === this.getTask(i)['title'] || query === this.getTask(i)['description']){
        return this.getTask(i);
      }else{
        return 'not found';
      }
    }
  }

}