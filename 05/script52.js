
function Person(firstName, lastName, country="Sunugaal"){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.country   = country;
}

Person.prototype.sayHello = function(){
    return `${this.firstName} say Hello and welcome !`;
}


function Employee(firstName, lastName, country="Sunugaal", baseSalary=1500){
    Person.call(this, firstName, lastName, country);
    this.baseSalary= baseSalary;
}

function Customer(firstName, lastName, customerId, country="Sunugaal"){
    Person.apply(this, [firstName, lastName, country="Sunugaal"]);
    this.customerId = customerId;
}


function extend(Child, Parent){
    Child.prototype = Object.create(Parent.prototype); //new Parent();
    Child.prototype.constructor = Child;
}

extend(Employee, Person);
extend(Customer, Person);

let employee = new Employee('Boukki', 'Ndour');
let customer = new Customer('Leukk', 'Diagne', 00001);

console.log(employee.constructor);
console.log(customer);


