
//******************************** Avant Factorysation du fonction sayHello */
// Constructeur Employee
/*function Employee(firstName, lastName, country){

    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;

    this.sayHello = function (){
        return `${this.firstName} say welcome!`;
    }
}

let employee1 = new Employee('Boukki', 'Ndour', 'Senegal');
let employee2 = new Employee('Leukk', 'Diagne', 'Sunugaal');

console.log(employee1);
console.log(employee2);*/

//******************************************* Après factorisation du fonction sayHello ********************************/

function Employee(firstName, lastName, country){

    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;

}

// Avantage partate du même fonction sayHello
Employee.prototype.sayHello = function (){
    return `${this.firstName} say welcome!`;
}

let employee1 = new Employee('Boukki', 'Ndour', 'Senegal');
let employee2 = new Employee('Leukk', 'Diagne', 'Sunugaal');

console.log(employee1);
console.log(employee2);