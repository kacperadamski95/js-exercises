
    const printAllEvenNumbersFromRangeXToY = (x, y) => {
        for (let i = x; i <= y; i++) {
            if (i % 2 ==0) {
                console.log(i);
            }
        }
    }
    // print even numbers from 10 to -20
    for (i = 10; i >= -20; i--) {
        if (i % 2 ==0) {
            // console.log(i);
        }
    }
    // #5 — Iterate through all numbers from 1 to 45. Print the following:
    // For multiples of 3 print “Fizz”
    // For multiples of 5 print “Buzz”
    // For multiples of 3 and 5 print “FizzBuzz”
    for (var index = 1; index <= 45; index++) {
        if (index % 3 == 0 && index % 5 == 0) {
            // console.log("FizzBuzz");
        } else if (index % 3 == 0) {
            // console.log("Fizz");
        } else if (index % 5 == 0) {
            // console.log("Buzz");
        }
    };

    const printFizzFor3BuzzFor5FizzBuzzfor3And5FromRangeVToW = (v, w) => {
        for (let index = v; index <= w; index++) {
            if (index % 3 == 0 && index % 5 == 0) {
                console.log("FizzBuzz");
            } else if (index % 3 == 0) {
                console.log("Fizz");
            } else if (index % 5 == 0) {
                console.log("Buzz");
            } 
        }
    };
        // printFizzFor3BuzzFor5FizzBuzzfor3And5FromRangeVToW(3, 210);


    let thisIsAnArray = ["element1", "element2", "element3", "element4"];
    for (let i = 0; i < thisIsAnArray.length; i++) {
        // console.log(thisIsAnArray[i]);
    }
    let numberArrays = [7,10,153,210,14];
    let sum = 0;
    for (let i = 0; i < numberArrays.length; i++) {
        sum = sum + numberArrays[i];
    }
        // console.log("The sum is: " + sum);

    const calculateSquareAreaFromAnySideLenght = (a) => {
        console.log(a * a);
    }

    calculateSquareAreaFromAnySideLenght(12);
    calculateSquareAreaFromAnySideLenght(3);