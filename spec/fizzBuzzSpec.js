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
});
