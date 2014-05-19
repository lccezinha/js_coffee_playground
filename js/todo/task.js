function Task(title, description) {
  this.title        = title;
  this.description  = description;
  this.created_at   = new Date();

  this.getTitle = function(){
    return this.title;
  }

  this.getDescription = function(){
    return this.description;
  }

  this.getCreatedAt = function() {
    return this.created_at;
  }
}