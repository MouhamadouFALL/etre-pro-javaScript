function Employee(firstName, lastName, country='Senegal'){

    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;

}

Employee.prototype.sayHello = function (){
    return `${this.firstName} say welcome!`;
}


let employee = new Employee('Leukk', 'Ndour', 'Mali');
let employee1 = new Employee('Boukki', 'Diop', 'Sunu');


console.log(employee.sayHello());
console.log(employee1.sayHello());
