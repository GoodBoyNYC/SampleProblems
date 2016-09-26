fizzBuzz(9);
fizzBuzz(4);
fizzBuzz(0);
function fizzBuzz(number) {
    var mod3, mod5;
    for (var i = 0; i < number; i++) {
        mod3 = i % 3;
        mod5 = i % 5;
        if (mod3 == 0 && mod5 == 0) console.log("FizzBuzz")
        else if (mod3 == 0) console.log("Fizz");
        else if (mod5 == 0) console.log("Buzz");
        else console.log(i);
    }
};