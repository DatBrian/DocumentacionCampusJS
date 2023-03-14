const F2 = function(){
  alert("función 2 ejecutada");
};

const F1 = function(callback){
  callback();
};

F1(F2);