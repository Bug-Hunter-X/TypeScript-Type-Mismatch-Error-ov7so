function greeter(person: string): string {
  return "Hello, " + person;
}

let user = ["Jane", "Doe"];

// Solution 1: Type Assertion
console.log(greeter(user.join(" "))); // Correctly concatenates array elements

// Solution 2:  Function Overloading (for handling different input types)
function greeter2(person: string): string;
function greeter2(person: string[]): string; 
function greeter2(person: string | string[]): string {
  if (Array.isArray(person)) {
    return "Hello, " + person.join(" ");
  } else {
    return "Hello, " + person;
  }
}

console.log(greeter2(user));
console.log(greeter2("John"));

// Solution 3: Change the function signature to accept an array
function greeter3(person: string[]): string {
  return "Hello, " + person.join(" ");
}
console.log(greeter3(user));