function FizzBuzz(){
}

FizzBuzz.prototype.play = function(number) {
  if (number % 3 === 0 && number % 5 === 0) {
  return'FizzBuzz'
}
  else if (number % 5 === 0) {
  return'Buzz'
}
  else if (number % 3 === 0){
    return'Fizz'
  }
}
