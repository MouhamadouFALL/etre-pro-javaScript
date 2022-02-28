
//FunctionFactory
function createEmployee(firstName, lastName, country='Senegal'){
    return {
        firstName,
        lastName,
        country,
        sayHello : function (){
            return `${this.firstName} say welcome !`;
        }
    };
}

let employee1 = createEmployee("Boukki", "Ndour");
console.log(employee1);

// Function constructor
function Employee(firstName, lastName, country="Senegal"){
    this.firstName = firstName;
    this.lastName  = lastName;
    this.country   = country;
    this.sayHello = function() {
        return `${this.firstName} say welcome !`;
    }
}

let employee2 = new Employee("Gaindé", "Ndiaye", "Sunugal");
console.log(employee2);