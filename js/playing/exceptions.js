throw "Error2";   //String type
throw 42;         //Number type
throw true;       //Boolean type
throw {toString: function() { return "I'm an object!"; } };

// Criando Exception
function MyException(message){
  this.message = message;
  this.name = 'MyFuckingException';
}

MyException.prototype.toString = function(){
  return this.message + ' was raised by: ' + this.name + ' exception!';
}

throw new MyException('Yeah Science, bitch!');

//try..catch

var number = 20;
try{
  console.log(100/number); // => 5
}catch(e){
  logMyErrors(e); // => Infinity
}

//try..catch.. finally
var number = 20;
try{
  console.log(100/number); // => 5
}catch(e){
  logMyErrors(e); // => Infinity
}finally{
  console.log('hue') // hue
}