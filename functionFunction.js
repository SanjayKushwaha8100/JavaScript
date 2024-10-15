// Define a function that takes another function as a parameter
function greet(name, greetingFunction) {
    console.log(greetingFunction(name));
  }
  
  // Define a function that generates a greeting message
  function sayHello(name) {
    return "Hello, " + name + "!";
  }
  
  // Define another function that generates a different greeting message
  function sayGoodbye(name) {
    return "Goodbye, " + name + "!";
  }
  
  // Call the greet function and pass sayHello as the greeting function
  greet("Alice", sayHello); // Output: Hello, Alice!
  
  // Call the greet function and pass sayGoodbye as the greeting function
  greet("Bob", sayGoodbye); // Output: Goodbye, Bob!
  