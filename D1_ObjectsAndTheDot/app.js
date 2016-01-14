var person = new Object();

person["firstname"] = "Bob";
person["lastname"] = "Builder";

var firstNameProperty = 'firstname';

console.log(person);
console.log(person[firstNameProperty]);

console.log(person.firstname);

person.address = new Object ();

person.address.street = '123 Main St.';
person.address.city = "New York";
person.address.state = "NY";


console.log(person.address.street);
console.log(person['address']['state']);


