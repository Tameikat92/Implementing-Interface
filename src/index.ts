

// This is equivalent to swifts read only 
interface Person {
    name: string;
    age: number;
    greet: () => void;
}

const user: Person = {
    name: "Kevin",
    age: 5000,
    greet: () => {
        console.log("This is a function")
    }
}

interface Car {
    make: string;      // "string" should be lowercase in TypeScript
    model: string;
    year: number;
    features: string[];  // Specifying that the array contains strings
}

const myCar: Car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    features: ["heated steering wheel", "heated seats", "rear view camera"]
};

const myFaulty: Car = {
    make: "Ford",
    model: "Escort",    // Capitalizing "Escort"
    year: 2015,
    features: ["slight oil", "heated seats", "rear view camera"]   // Fixing typo in "slight oil"
};

interface Animal {
    animalName: string;
    speak:() => void;
}

// implementing interface into a class
class Dog implements Animal {
    animalName: string;

constructor(animalName:string){
    this.animalName = animalName;
}
// call in our speak
speak () {
    console.log("woof")
}
eat () {
    console.log("crunch chomp eats")
}

}

class Cat implements Animal {
    animalName: string;
    constructor(animalName: string){
        this.animalName = animalName;
    }

    speak () {
        console.log("meoooowww")
    }
    eat () {
        console.log("crunch chomp eats")
    }
}
