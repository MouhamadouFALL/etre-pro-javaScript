

// les deux objets que nous propose JavaScript

// Objet Math
console.log(Math.PI); // afficher PI

// Objet window
console.log(window); 
console.log(this); 
console.log(this === window);  // true
// this and window sont exactement le même objet

var name = "FALL"

function add(a, b) {
    return a + b;
}
console.log(window)