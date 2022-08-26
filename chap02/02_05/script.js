
// Parcourir les propriétés d'un objet

let employee = {
    firstName : "Ngor",
    lastName : "FAYE",
    age : 28,
    sayHello: function () {
        return `${this.firstName} say Hello !`
    }
};

console.log(employee);

// appréhender la boucle for pour parcourir les props d'un objet
for (const prop in employee){
    console.log(`nom proprièté : ${prop} et valeur proprièté : ${employee[prop]} `);
}

