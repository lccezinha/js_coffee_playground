function Task(title, description) {
  var title        = title;
  var description  = description;
  var created_at   = new Date();

  this.getTitle = function(){
    return title;
  }

  this.getDescription = function(){
    return description;
  }

  this.getCreatedAt = function() {
    return created_at;
  }
}