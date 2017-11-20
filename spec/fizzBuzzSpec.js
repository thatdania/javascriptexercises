describe("FizzBuzz", function() {

  var fizzBuzz;

  beforeEach(function() {
    fizzBuzz = new FizzBuzz();
  });

  it("#play should print Fizz", function() {
    expect(fizzBuzz.play(3)).toEqual('Fizz');
  });

  it("#play should print Buzz", function() {
    expect(fizzBuzz.play(5)).toEqual('Buzz');
  });

  it("#play should print FizzBuzz", function(){
    expect(fizzBuzz.play(15)).toEqual('FizzBuzz')
  })

  it("#play should print not a FizzBuzz", function(){
    expect(fizzBuzz.play(2)).toEqual('not a FizzBuzz')
  })

});
