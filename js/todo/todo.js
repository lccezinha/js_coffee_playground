function Todo(){
  this.tasks = [];

  this.getTasks = function(){
    return this.tasks;
  }

  this.add = function(task){
    this.tasks.push(task);
  }

  this.getTasksSize = function() {
    return this.tasks.length;
  }
}