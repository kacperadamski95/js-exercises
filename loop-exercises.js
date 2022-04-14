// exercising loop for 
    // print all odd numbers from 7 to 31
    // for (let i = 7; i <= 31; i++) {
    //     if (i % 2 !=0) {
    //         console.log(i);
    //     }
    // }

    const printAllEvenNumbersFromRangeXToY = (x, y) => {
        for (let i = x; i <= y; i++) {
            if (i % 2 ==0) {
                console.log(i);
            }
        }
    }

    // printAllEvenNumbersFromRangeXToY(-10, 75);


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
    // Warto zapamiętać ten przykład, bo może pojawić się na rozmowie kwalifikacyjnej
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

    
    
        
    // && - i 
    // || - lub (or)
    // ^ - to lub to (jeden z, ale nie 2 równocześnie, musi być więcej niż 2 zmienne)
    // ! - negacja (!=)
        
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

    //funkcja na obliczanie powierzchni kwadratu z dowolnej długości boku

    const calculateSquareAreaFromAnySideLenght = (a) => {
        console.log(a * a);
    }

    calculateSquareAreaFromAnySideLenght(12);
    calculateSquareAreaFromAnySideLenght(3);