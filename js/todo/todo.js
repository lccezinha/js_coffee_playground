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

}