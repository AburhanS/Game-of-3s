function gameOfThrees(number) {
    let currentNumber = number;

    while (currentNumber !== 1) {
        if (currentNumber % 3 === 0) {
            console.log(`${currentNumber} 0`);
            currentNumber /= 3;
        } else if (currentNumber % 3 === 1) {
            console.log(`${currentNumber} -1`);
            currentNumber -= 1;
        } else {
            console.log(`${currentNumber} 1`);
            currentNumber += 1;
        }
    }

console.log(`1`);
}

gameOfThrees(100);