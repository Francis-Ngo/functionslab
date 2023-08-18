//1 Write a function called logMyName that will log your name.  Call this 1 time
const logMyName = () => {
    console.log("Your Name");
}
logMyName();

//Write a function called logThisName that will log the name parameter. Call this 2 times. 
const logThisName = (name) => {
    console.log(name);
}
logThisName("Name 1");
logThisName("Name 2");

//3. Write a function called checkName that will check if the name parameter is "Joyce". Call this function 3 times - with "Chase" "Jerry" and "Joyce"
const checkName = (name) => {
    if (name === "Joyce") {
        console.log("Welcome Joyce!")
    } else {
        console.log("You're NOT Joyce")
    }
}
checkName("Chase");
checkName("Jerry");
checkName("Joyce");

//4. Write a function that called doLoop will do a loop that will count from 0-10. Call this function 3 times.
const doLoop = () => {
    for (let i = 0; i <= 10; i++) {
        console.log(i);
    }
};
doLoop();
doLoop();
doLoop();

//5. Write a function called doLoopWithThisNumber that will do a while loop from 0 until the given number parameter. Call this 5 times with 10, 100, 78, 22, 15
const doLoopWithThisNumber = (number) => {
    let i = 0;
    while (i < number) {
        console.log(i);
        i++;
    }
};
doLoopWithThisNumber(10);
doLoopWithThisNumber(100);
doLoopWithThisNumber(78);
doLoopWithThisNumber(22);
doLoopWithThisNumber(15);

//6. Write a function (you make the name) that will add 2 numbers together. Call 3 times.
const addNumbers = (x, y) => {
    x + y;
};

console.log(addNumbers(3,5));
console.log(addNumbers(10,7));
console.log(addNumbers(100,51000));

//7. Write a function (you make the name) that will check if the number parameter is even or odd. call 2 times.
const checkEvenOdd = (number) => {
    if (number % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
};
checkEvenOdd(10);
checkEvenOdd(7);


//10. Write a function (you make the name) that will log the typeof the data parameter. call 1 time
const logTypeOf = (data) => {
    console.log(typeof data);
};
logDataType("HelloWord")

//11. Write a function (you make the name) that will do a loop 0-? The loop should end based on the number parameter. call 2 times.
const doLoopToNumber = (number) => {
    for (let i = 0; i <= number; i++) {
        console.log(i);
    }
};
doLoopToNumber(10);
doLoopToNumber(15);