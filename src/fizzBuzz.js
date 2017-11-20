var array = []
for(var i = 1; i <= 100; i++){
  array.push(i)
}

array.forEach(function(i){
  if (i % 3 === 0 && i % 5 === 0){
    console.log('fizzbuuzz');
  }
  else if (i % 5 === 0){
    console.log('buzz'+ i);
  }
  else if (i % 3 === 0) {
    console.log('fizz'+i);
  }
});
