
function Employee(firstName, lastName, country='Senegal'){

    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;

}

Employee.prototype.sayHello = function (){
    return `${this.firstName} say welcome!`;
}


let employee = new Employee('Leukk', 'Ndour', 'Mali');

console.log(employee);
console.log(employee.firstName);
console.log(employee.sayHello);

// connaitre si une propriété est propre à l'objet ou pas
console.log(employee.hasOwnProperty('firstName'));
console.log(employee.hasOwnProperty('sayHello'));