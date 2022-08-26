

// Ajouter et Retirer des propriétés à l'objet

let employee = {
    firstName : "Ngor",
    lastName : "FAYE",
    age : 28,

    sayHello : function() {
        return `${this.firstName} say you welcome !`
    }
};


// méthode 1: Ajouter une nouvelle proprièté
employee.email = "ngor.faye@gmail.com";
console.log(employee);

// méthode 2: Ajouter une nouvelle proprièté
employee['country'] = "Senegal";
console.log(employee);

// méthode 3: Ajouter une nouvelle proprièté (dynamique)
let prop = 'telephone';
employee[prop] = '+221778887777';
console.log(employee);

// méthode 1: retirer une proprièté
delete employee['telephone'];
delete employee.country;
console.log(employee);

// acceder à la valeur d'une proprièté
console.log(employee.firstName); // méthode 1
console.log(employee['lastName']); // méthode 2

// méthode 3 dynamique
let prop1 = 'age';
console.log(employee[prop1]);

// Appeler une méthode
console.log(employee.sayHello()); // methode 1
console.log(employee['sayHello']()); // methode 2

// méthode dynamique
let methode = 'sayHello';
console.log(employee[methode]());

console.log(employee);
// appréhender la boucle for pour parcourir les props d'un objet
for (const prop in employee){
    console.log(`nom proprièté : ${prop} et valeur proprièté : ${employee[prop]} `);
}

