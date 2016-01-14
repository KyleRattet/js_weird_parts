var Bob = {
  firstname: "Bob",
  lastname: "Builder",
  address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY'
  }
};

function greet (person) {
  console.log('Hi ' + person.firstname);
}

greet(Bob);

greet({
  firstname: 'John',
  lastname: 'Doe'
});

Bob.address2 = {
  street: '456 Second St.'
};

console.log(Bob.address2);
console.log(Bob);
