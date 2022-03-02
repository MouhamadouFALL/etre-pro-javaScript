
function Employee(firstName, lastName, country='Senegal'){

    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;

}

Employee.prototype.sayHello = function (){
    return `${this.firstName} say welcome!`;
}

Object.defineProperty(Employee.prototype, 'sayHello', {
    enumerable: false,
    configurable: false,
});

let employee = new Employee('Leukk', 'Ndour', 'Mali');
// afficher la description des propriètés
console.log(Object.getOwnPropertyDescriptor(Employee.prototype, 'sayHello'));
console.log(Object.getOwnPropertyDescriptor(Employee.prototype, 'constructor'));
console.log();

console.log(employee);

// connaitre les de employee auxquels on a accés
for (prop in employee){
    console.log(prop);
}