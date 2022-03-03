
function Person(firstName, lastName, country="Sunugaal"){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.country   = country;
}

Person.prototype.sayHello = function(){
    return `${this.firstName} say Hello and welcome !`;
}


function Employee(firstName, lastName, country="Sunugaal", baseSalary=1500){
    
    this.baseSalary= baseSalary;
}

function Customer(firstName, lastName, customerId, country="Sunugaal"){
    
    this.customerId = customerId;
}

Employee.prototype = new Person();
Customer.prototype = new Person();

let employee = new Employee('Boukki', 'Ndour');
let customer = new Customer('Leukk', 'Diagne', 00001);

console.log(employee.sayHello());
console.log(customer.sayHello());