
let colors = ['green', 'yellow', 'red'];
//console.log(colors); 

// Ajouter à la fin du tableau
colors.push('blue');  // decouvrir le prototype
console.log(colors.valueOf()); // decouvrir le prototype du prototype

function Employee(firstName, lastName, country="Senegal"){

    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;

    sayHello = function (){
        return `${this.firstName} say welcome!`;
    }
}

let employee = new Employee('Leukk', 'Diagne', 'Sunugaal');
let emProto = Object.getPrototypeOf(employee); // obtenir le prototype de Employee
let baseProto = Object.getPrototypeOf(emProto); // Obtenir le prototype (base) du prototype Employee
console.log(baseProto);

objetToString1 = employee.toString();
console.log(objetToString1);

// ce que javaScript à réaliser 
objetToString2 = baseProto.toString.call(employee);
console.log(objetToString2);



