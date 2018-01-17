import { addExpense } from "../actions/expenses";

const add = (a,b) => a + b ; //this function's op is checked against test cases

test('should add two numbers',()=> { //providing test cases
    const result = add(3,4);

  //  if(result !== 7) {
  //      throw new Error(`You added 4 and 3. The result was ${result}. Expect 7`);
  //  }

   //better way for above commented stuff
  expect(result).toBe(7);  //comparing result to expected output
});

const generateGreeting = (name) => `Hello ${name}!`;

test('should greet the user', () => {
    const result=generateGreeting('Archie');
    expect(result).toBe('Hello Archie!');
}); 

test('should greet the user', () => {
    const result=generateGreeting('Arch');
    expect(result).toBe('Hello Arch!');
}); 

