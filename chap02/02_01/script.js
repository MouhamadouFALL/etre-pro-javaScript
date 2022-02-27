
// metode 1 pour créer un objet
let employee = {
    firstName : "Ngor",
    lastName : "FAYE",
    age : 28
};

// Affiche l'Objet sur la console
console.log(employee);

// méthode 1 Ajouter une nouvelle proprièté
employee.email = "ngor.faye@gmail.com";
console.log(employee);

// méthode 2 Ajouter une nouvelle proprièté
employee['country'] = "Senegal";
console.log(employee);

// méthode 3 Ajouter une nouvelle proprièté (dynamique)
let prop = 'telephone';
employee[prop] = '+221778887777';
console.log(employee);

// méthode 1 retirer une proprièté
delete employee['telephone'];
delete employee.country;

console.log(employee);