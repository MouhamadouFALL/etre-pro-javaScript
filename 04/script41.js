
let employee = {

    firstName : "Leukk",
    lastName : "Diop",
    age : 120,

    sayHello : function(){
        console.log(`${this.firstName} say you welcome!`);
    }
}

//console.log(employee.constructor); // afficher la propriété constructor
//console.log(employee); // chercher le prototype
console.log(employee.toString()); // toString() vient du prototype qu'implémente l'objet


/*
// Objet Employe
function Employee(firstName, lastName, country='Senegal'){
    
    this.firstName = firstName;
    this.lastName  = lastName;
    this.country   = country;
}

Employee.prototype.sayHello = function (){
    return `${this.firstName} say welcome`;
}

let employee = new Employee("Boukki", "Ndour", "Sunugaal");

console.log(employee.sayHello());
*/