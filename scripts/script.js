// Task 1: Implement a function that calculates total coffees sold
    // Calculate the total coffees sold by summing up a sales array
function calculatesTotalSold(sold){
    let total = 0;
    for (const sold of sold){
        total =+ sold.amount;
    }
    return total;
}


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


// Task 3: Define a class for Jazz Coffee Roasters
class JazzCoffeeRoasters{
    constructor(name = "Ruby, Parlor, Surreal", grade = "A, B, C", location = "MN, KS, CA"){
        coffee.name = name;
        coffee.grade = grade;
        coffee.location = location;
    }
}

// Task 4: Extend the Jazz Coffee Roaster class for Specialty Coffee Roasters
class SpecialtyCoffeeRoaster extends JazzCoffeeRoasters{
    constructor(name, type, location, flavor){
        super(name, type, location);
        coffee.flavor = flavor;
    }
}

// Task 5: Create a custom constructor function for Jazz Coffee Blends
function JazzCoffeeBlends(name = "SB, CB, DK", signature = "smooth, acidic, sweet", origin = "USA, Colombia, Ethopia"){
    let coffeeblend = {};
    coffee.name = name;
    coffee.signature = signature;
    coffee.origin = origin;
    return coffeeblend;
}

// Task 6: Implement a class with default parameters for Jazz Coffee Cups
class JazzCoffeeCups{
    constructor(material = "ceramic, glass, stainless, plastic", size = "4oz, 8oz, 16oz, 20oz, 24oz, 32oz", feature = "lid, personalized, microwave safe"){
        this.material = material;
        this.size = size;
        this.feature = feature;
    }
}

// Task 7: Use template literals to create a message about a coffee event
    //The event details have been given to you below
    const coffeeEvent = {
        name: "Java Jam",
        date: "April 10, 2024",
        venue: "Jazz & Java"
    };
    let message = `Java Jam on April 10, 2024 at Jazz & Java`;
    
    
    // Task 9: Use spreadrest operators on an array
    
    // Array of coffee types
    const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
    const newType = "Mocha";
    
    // Add a new coffee type using spread operator and create an updated coffee type array
    function updatedCoffeeTypes(IcedCoffee, ColdBrew, Affogato){
        return `${IcedCoffee} ${ColdBrew} ${Affogato}`;
    }
    console.log("Updated Coffee Types:", updatedCoffeeTypes);
    
    