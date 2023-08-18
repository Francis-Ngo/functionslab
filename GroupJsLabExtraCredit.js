//1 Define Mama cat
const cat1 = { name: "mamaCat", breed: "Calico", age: 3 };
console.log(cat1.breed);
console.log(cat1.age);

//2 Define Papa cat
const cat2 = { name: "papaCat", breed: "Egyptian", age: 3 };
console.log(cat2.breed);
console.log(cat2.age);


// Define combineCats function
const combineCats = (mama, papa) => {
    console.log("Mama Cat", mama); 
    console.log("Papa Cat", papa); 
};

// Call combineCats function with cat1 and cat2 as arguments
combineCats(cat1, cat2);
console.log(cat1, cat2);

// CombineCats2 function (it won't run if we use combineCats because it is already declared)
const combineCats2 = (mama, papa) => {
    const combinedCat2 = {
        name: mama.name + papa.name,
        age: 1,
        breed: mama.breed + "-" + papa.breed
    };
    return combinedCat2;
};

// Call combineCats function with cat1 and cat2 as arguments
const combinedResult = combineCats2(cat1, cat2);
console.log(combinedResult);