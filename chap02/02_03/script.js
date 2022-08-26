

// Accéder aux propriétés d'un objet

let employee = {
    firstName : "Ngor",
    lastName : "FAYE",
    age : 28
};

// acceder à la valeur d'une proprièté
console.log(employee.firstName); // méthode 1
console.log(employee['lastName']); // méthode 2

// méthode 3 dynamique
let prop1 = 'age';
console.log(employee[prop1]);