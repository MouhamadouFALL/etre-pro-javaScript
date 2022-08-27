
// Abstraction de certaines propriétées
function Employee (firstName, lastName, country='Senegal', gain=1500){

    let hireDate = new Date();
    let baseSalary = gain;

    let calculateSalary = function (){
        var today = new Date();
        return baseSalary + (baseSalary * ((today.getFullYear() - hireDate.getFullYear()) * 0.01));
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.country = country;

    this.sayHello = function (){
        return `${this.firstName} say welcome !`;
    }

    this.getSalary = () => {
        return calculateSalary();
    }

    this.getHireDate = () => {
        return hireDate;
    }

    Object.defineProperty(this, 'hireDate', {
        get : function (){
            return hireDate;
        }
    });

    Object.defineProperty(this, 'salary', {
        get : function (){
            return calculateSalary();
        }
    });

    Object.defineProperty(this, 'baseSalary', {
        get : () => {
            return baseSalary;
        },
        set : (newSalary) => {
            if (typeof(newSalary) === 'number' && newSalary > baseSalary){
                baseSalary = newSalary;
            }
            else {
                console.log('Le nouveau salaire est n\'est pas correct');
            }
        }
    });
}

let employee = new Employee('Boukki', 'Ndour');
console.log(employee.baseSalary);
employee.baseSalary = 1700;
console.log(employee.baseSalary);

