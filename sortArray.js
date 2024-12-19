let numbersInput = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let namesInput = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];


let mergedArray = numbersInput.concat(namesInput);
console.log("Merged array:", mergedArray);


let sortedNumbers = numbersInput.sort((a, b) => b - a);
console.log("Sorted numbers in reverse:", sortedNumbers);


let sortedNames = namesInput.sort();
console.log("Sorted names alphabetically:", sortedNames);
