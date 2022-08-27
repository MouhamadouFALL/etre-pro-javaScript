
let product = {
    name : 'Mobile sumsung',
    price : 504.55,
    category : 'cat-SUMSUNG',
    getPriceCat : function (){
        return     `price : ${this.price} | category : ${this.category}`
    }
}

let product2 = {
    name : 'Mobile alcatel',
    price : 504.55,
    category : 'cat-ALCATEL',
    getPriceCat : function (){
        return     `price : ${this.price} | category : ${this.category}`
    }
}

// Factoriser le code Product
function createProduct (name, price, category) {
    return {
        name : name,
        price : price,
        category : category,
        getPriceCat : function (){
        return     `price : ${price} | category : ${category}`
    }
    }
}

// On a deux façons de factoriser un code

// Factory Fonction: Factoriser le code Product avec la syntaxe ES6
function createProductES6 (name, price, category) {
    return {
        name,
        price,
        category,
        getPriceCat : () => {
            return `price : ${price} | category : ${category}`
    }
    }
}

// creer un produit
let product3 = createProductES6('Mobile Sumsung', 543.44, 'cat-SUMSUNG')
console.log(product3)
console.log(product3.getPriceCat())

// Construct fonction: Factoriser le code Product 
function Product (name, price, category) {
    this.name = name
    this.price = price
    this.category = category
    this.getPriceCat = () => {
        return `price : ${this.price} | category : ${this.category}`
    }

}

let product4 = new Product('Mobile Tecno', 345.55, 'cat-TECNO')
console.log(product4)
console.log(product4.getPriceCat())








// Les notion de prototype

///let colors = ['red', 'green', 'blue']
//colors.push('yellow')
//console.log(typeof(colors))
//console.log(colors)
//console.log(colors.valueOf())

// obtenir le prototype de base de l'objet
//console.log(Object.prototype)

// obtenir le prototype d'un objet construit
//console.log(Object.getPrototypeOf(colors))
