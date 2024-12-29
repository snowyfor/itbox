/*
 Cookie : parent class
 Chocolate, Strawberry, Blueberry : child class
 Oven : factory class(class that return object 'container{ [] }')

Cookie have 'name, type, price' attribute
Oven have 'container' attribute(with default value '[]')
add isSweet() method in child class
add bake() & deliver() method in factory class
-bake() : to add 1 cake to oven
-deliver() : to delete 1 cake from oven

*/

class Cookie {
    constructor(name, type, price) {
        this.name = name;
        this.type = type;
        this.price = price;
    }
}

class Chocolate extends Cookie {
    constructor(name, type, price, isSweet) {
        super(name, type, price);
        this.isSweet = isSweet;
    }
}

class Strawberry extends Cookie {
    constructor(name, price, isSweet) {
        super(name, 'Strawberry', price);
        this.isSweet = isSweet || false;
    }
}

class Blueberry extends Cookie {
    constructor(name, price, isSweet) {
        super(name, 'Blueberry', price);
        this.isSweet = isSweet || false;
    }
}

class Oven {
    constructor(container) {
        this.container = container || [];
    }
    //bake: add 1 cookie to oven
    bake(cookie) {
        this.container.push(cookie);
    }
    //deliver: delete 1 cookie from oven
    deliver(cookie_name) {
        this.container = this.container.filter(cookie => cookie.name !== cookie_name);
    }
}

let oven = new Oven();
//empty oven check
console.log(oven);
console.log("\n");
//bake 3 cakes
oven.bake(new Blueberry("Blueberry Cake",150000));
oven.bake(new Strawberry("Red Velvet",125000));
oven.bake(new Chocolate("Brownies",100000)); 
console.log(oven.container);
console.log("\n");
//deliver 1 cake
oven.deliver("Brownies");
console.log(oven.container);


/*
penjelasan syntax: https://poe.com/s/1Way5FoF8jdxe9rwVglb

pada class Chocolate
-constructor(name, type, price, isSweet) artinya parameter
dari class Chocolate ada 4. [ini sama spt mendefinisikan function dgn 4 parameter, yaitu (name, type, price, isSweet)]
-super(name, type, price) artinya mengambil parameter dari parent class(yaitu Cookie)

pada class Strawberry
-mengapa tidak ada 'type' di dalam kurung constructor()?
karena 'type' memiliki nilai default pasti 'Strawberry' (lihat di dalam kurung super)
-kesimpulan:
jika parameter memiliki nilai default pasti, maka tidak perlu ditaruh di dlm kurung constructor(), seperti 'Strawberry'
*/