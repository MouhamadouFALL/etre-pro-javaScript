
function Employee (firstName, lastName, baseSalary=1500, country='Senegal'){

    let hireDate = new Date();

    let calculateSalary = function (){
        var today = new Date();
        return this.baseSalary + (this.baseSalary * ((today.getFullYear() - hireDate.getFullYear()) * 0.01));
    }


    this.baseSalary = baseSalary;
    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;

    this.sayHello = function (){
        return `${this.firstName} say welcome !`;
    }

    this.getSalary = function (){
        return calculateSalary();
    }
    this.getHireDay = function (){
        return hireDate;
    }

    
}

let employee = new Employee('Boukki', 'Ndour');
console.log(employee.calculateSalary());

