
let myObj = {nom : "Boukki"};
let myArray = ['orange', 'mangue', 'coco'];

console.log(Object.getPrototypeOf(myObj));
console.log(Object.getPrototypeOf(myArray));

function Employee(firstName, lastName, country='Senegal'){
    
    this.firstName = firstName;
    this.lastName  = lastName;
    this.country   = country;
}

let employee = new Employee("Boukki", "Ndour", "Sunugaal");

// Le prototype du constructeur est devenu par la suite le prototype de l'objet construit. Exemple :
console.log(Employee.prototype);
console.log(Object.getPrototypeOf(employee));