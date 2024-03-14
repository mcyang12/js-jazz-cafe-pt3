// Task 1: Implement a function that calculates total coffees sold
    // Calculate the total coffees sold by summing up a sales array
function calculatesCoffeeSold(sales){
    let total = 0;
    for (const sale of sales){
        total += sale;
    }
    return total;
}

let coffeeSales = [5, 5, 3, 6, 7];
let totalSales = calculatesCoffeeSold(coffeeSales);
console.log("Total coffee sales for the day", totalSales);

// Task 2: Implement a function to filter out decaf coffees from a list of coffee options
    // Use the filter method to filter out decaf coffee options
function filterDecafLists(lists){
    let regularCoffeeLists = [];
    for(const list of lists){
        if(!list.decaf){
            regularCoffeeLists.push(list);
        }
    }
    return regularCoffeeLists;
}
//function filterDecafCoffees(coffeeOptions){
    //return coffeeOptions.filter(option => !option.decaf);
//}
//const coffeeOptions = [
    //{name: "Espresso", decaf: false},
    //{name: "Latte", decaf: true},
    //{name: "Cappucino", decaf: false},
//]


// Task 3: Define a class for Jazz Coffee Roasters
class JazzCoffeeRoasters{
    constructor(name = "Ruby, Parlor, Surreal", grade = "A, B, C", location = "MN, KS, CA"){
        coffee.name = name;
        coffee.grade = grade;
        coffee.location = location;
    }
}

// let coffeeRoaster = new JazzCoffeeRoasters("Ruby, Parlor, Surreal");
// console.log("Coffee Roaster:", coffeeRoaster);

// Task 4: Extend the Jazz Coffee Roaster class for Specialty Coffee Roasters
class SpecialtyCoffeeRoaster extends JazzCoffeeRoasters{
    constructor(name, type, location, flavor){
        super(name, type, location);
        coffee.flavor = flavor;
    }
}

// let SpecialtyCoffeeRoaster = new SpecialtyCoffeeRoaster("Elizabeth", "Seattle", "Coffee Art");
// console.log("Flavor Coffee Roaster:", SpecialtyCoffeeRoaster);


// Task 5: Create a custom constructor function for Jazz Coffee Blends
function JazzCoffeeBlends(name = "SB", signature = "smooth", origin = "USA"){
    let coffeeBlend = {};
    coffee.name = name;
    coffee.signature = signature;
    coffee.origin = origin;

}

let coffeeBlend = new JazzCoffeeBlends("SB", "smmoth", "USA");
console.log("Coffee Blend:", coffeeBlend);

// Task 6: Implement a class with default parameters for Jazz Coffee Cups
class JazzCoffeeCups{
    constructor(material = "ceramic", size = "16oz", feature = "lid"){
        this.material = material;
        this.size = size;
        this.feature = feature;
    }
}

let testCoffeeCup = new JazzCoffeeCups();
console.log = ("Test Coffee Cup:", testCoffeeCup);

// Task 7: Use template literals to create a message about a coffee event
    //The event details have been given to you below
    const coffeeEvent = {
        name: "Java Jam",
        date: "April 10, 2024",
        venue: "Jazz & Java"
    };
    let message = `Java Jam on April 10, 2024 at Jazz & Java`;
    //let eventMessage = `Join us on ${coffeeEvent.date} for our ${coffeeEvent.name} at ${coffeeEvent.venue}.`;
    //console.log(eventMessage);
    
    // Task 9: Use spreadrest operators on an array
    
    // Array of coffee types
    const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
    const newType = "Mocha";
    const updatedCoffeeTypes =[...coffeeTypes, newType]; //ADD THIS NEXT TIME

    // Add a new coffee type using spread operator and create an updated coffee type array

    
    console.log("Updated Coffee Types:", updatedCoffeeTypes);
    
    