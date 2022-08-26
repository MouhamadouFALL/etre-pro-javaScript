
// Utiliser une fonction comme une propriété
let employee = {
    firstName : "Ngor",
    lastName : "FAYE",
    age : 28,
    sayHello: function () {
        return `${this.firstName} say Hello !`
    }
};

// Appeler une méthode
console.log(employee.sayHello()); // methode 1
console.log(employee['sayHello']()); // methode 2

// méthode dynamique
let methode = 'sayHello';
console.log(employee[methode]());

