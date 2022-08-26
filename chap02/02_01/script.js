
// metode 1 pour créer un objet
let employee = {
    firstName : "Ngor",
    lastName : "FAYE",
    age : 28,

    sayHello : function() {
        return `${this.firstName} say you welcome !`
    }
};
// Affiche l'Objet sur la console
console.log(employee);

// Methode 2: Pour creer un nouvel Objet
let product = new Object();

product.name = "Sumsung Mabile";
product.price = "12.55";

console.log(product)

