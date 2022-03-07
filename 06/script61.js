
/*
function Person(firstName, lastName, country='Belgium'){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.country   = country;
}

Person.prototype.sayHello = function(){
    return `${this.firstName} say welcome!`;
}*/

class Person{

    constructor(firstName, lastName, country="SENEGAL"){
        this.firstName = firstName;
        this.lastName  = lastName;
        this.country   = country;
    }

    sayHello(){
        return `${this.firstName} say welcome!`;
    }
}

let personne = new Person('Boukki', 'Diagne');
console.log(personne.sayHello());