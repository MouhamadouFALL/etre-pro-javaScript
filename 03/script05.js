
// call({}, args) et apply({}, [args])

function Employee (name, an, country) {
    this.name = name
    let age = an
    this.country = country

    this.sayHello = () => {
        return `${this.name} vous dit bonjour!`
    }

    Object.defineProperty(this, 'age', {
        get : () => {
            return age;
        },
        set : (newAge) => {
            if(typeof(newAge) === 'number') {
                age = newAge
            }
            else{
                console.log("l'age doit être un entier!")
            }
            
        }
    })
}


let client = {
    name : "Leukk",
    adresse : "cap vert",
    numero : "+221"
}

let employee = new Employee('Boukki', 32, 'senegal')

console.log(employee.sayHello.call(client))