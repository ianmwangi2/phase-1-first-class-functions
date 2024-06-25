//A-Function
function receivesAFunction(callback) {
    callback();
}

//a-named-function
function returnsANamedFunction() {
    return function myNamedFunction() {};
  }

//an-anonymous-function
function returnsAnAnonymousFunction() {
    return function() {};
}