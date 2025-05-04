
// 1
// let input: string | null = prompt("Enter a char input");

// if (input !== null) {
//   console.log("You entered: " + input);
// }


// 2

// let input1 : string | null = prompt("Enter first input")
// let input2 : string | null = prompt("Enter Second input")

// if(input1 !== null && input2 !== null){
//     let num1 : number = parseInt(input1)
//     let num2 : number = parseInt(input2)

//     let sum : number = num1 + num2;

//     console.log("Sum : ",sum)
// }


// 3

// let P: string | null = prompt("Enter the principal amount:");
// let R: string | null = prompt("Enter the rate of interest:");
// let T: string | null = prompt("Enter the time (in years):");

// if (P !== null && R !== null && R !== null) {
//   let principal: number = parseInt(P);   // 1000000
//   let rate: number = parseInt(R);        // 8
//   let time: number = parseInt(T);        // 4

//   let simpleInterest: number = (principal * rate * time) / 100;

//   console.log("Simple Interest is: " + simpleInterest);
// }


// 4

// let mark: string | null = prompt("Enter your mark (out of 100):");
// if (mark !== null) {
//   let Fmark: number = parseInt(mark);
//   if (Fmark >= 50) {
//     console.log("You have passed the subject!");
//   } else {
//     console.log("You have failed the subject.");
//   }
// }

// 5

// let markInput: string | null = prompt("Enter your total marks percentage:");
// if (markInput !== null) {
//   let totalMark: number = parseInt(markInput);
//   let grade: string;
//   if (totalMark > 90) {
//     grade = "A";
//   } else if (totalMark >= 80) {
//     grade = "B";
//   } else if (totalMark >= 70) {
//     grade = "C";
//   } else if (totalMark >= 60) {
//     grade = "D";
//   } else if (totalMark >= 50) {
//     grade = "E";
//   } else {
//     grade = "Failed";
//   }
//   console.log("Your grade is: " + grade);
// }

// 6

// let dayInput: string | null = prompt("Enter a number (1-7) to get the corresponding day of the week:");
// if (dayInput !== null) {
//   let dayNumber: number = parseInt(dayInput);
//   let day: string;
//   switch (dayNumber) {
//     case 1:
//       day = "Sunday";
//       break;
//     case 2:
//       day = "Monday";
//       break;
//     case 3:
//       day = "Tuesday";
//       break;
//     case 4:
//       day = "Wednesday";
//       break;
//     case 5:
//       day = "Thursday";
//       break;
//     case 6:
//       day = "Friday";
//       break;
//     case 7:
//       day = "Saturday";
//       break;
//     default:
//       day = "Invalid Entry";
//   }

//   console.log("The day is: " + day);
// }

// 7

// let numberI: string | null = prompt("Enter a number ");

// if (numberI !== null) {
//   let number: number = parseInt(numberI);

//   for (let i = 1; i <= 10; i++) {
//     let result = i * number;
//     console.log(`${i} x ${number} = ${result}`);
//   }
// }

// 8

// let limitInput: string | null = prompt("Enter a limit:");
// if (limitInput !== null) {
//   let limit: number = parseInt(limitInput);
//   let sum: number = 0;
//   for (let i = 1; i <= limit; i += 2) {
//     sum += i;
//   }
//   console.log("Sum of odd numbers = " + sum);
// }

// 9

// let rows: number = 5; 

// for (let i = 1; i <= rows; i++) {
//   let line: string = "";
//   for (let j = 1; j <= i; j++) {
//     line += j + " ";
//   }
//   console.log(line.trim());
// }

// 10

// let sizeInput: string | null = prompt("Enter the size of arrays:");

// if (sizeInput !== null) {
//   let size: number = parseInt(sizeInput);

//   let array1Input: string | null = prompt(`Enter ${size} values for Array 1:`);
//   let array2Input: string | null = prompt(`Enter ${size} values for Array 2 :`);

//   if (array1Input !== null && array2Input !== null) {
//     let array1: number[] = array1Input.split(',').map(val => parseInt(val.trim()));
//     let array2: number[] = array2Input.split(',').map(val => parseInt(val.trim()));

//     if (array1.length === size && array2.length === size) {
//       let temp: number[] = array1;
//       array1 = array2;
//       array2 = temp;

//       console.log("Arrays after swapping:");
//       console.log("Array1:", array1.join(', '));
//       console.log("Array2:", array2.join(', '));
//     } else {
//       console.log("Error: Make sure you enter exactly " + size + " values for both arrays.");
//     }
//   }
// }

// 11

// let sizeInput: string | null = prompt("Enter the size of the array:");

// if (sizeInput !== null) {
//   let size: number = parseInt(sizeInput);

//   let arrayInput: string | null = prompt(`Enter ${size} values:`);

//   if (arrayInput !== null) {
//     let array: number[] = arrayInput.split(',').map(val => parseInt(val.trim()));

//     if (array.length === size) {
//       let evenCount: number = 0;

//       for (let i = 0; i < array.length; i++) {
//         if (array[i] % 2 === 0) {
//           evenCount++;
//         }
//       }

//       console.log(" even numbers count : " + evenCount);
//     } else {
//       console.log("Error: You must enter exactly " + size + " numbers.");
//     }
//   }
// }

// 12
// let sizeInput: string | null = prompt("Enter the size of the array:");

// if (sizeInput !== null) {
//   let size: number = parseInt(sizeInput);

//   let arrayInput: string | null = prompt(`Enter ${size} values:`);

//   if (arrayInput !== null) {
//     let array: number[] = arrayInput.split(',').map(val => parseInt(val.trim()));

//     if (array.length === size) {
//       array.sort((a, b) => b - a); // Sort in descending order

//       console.log("Sorted array:");
//       console.log(array.join(', '));
//     } else {
//       console.log("You must enter exactly " + size + " numbers.");
//     }
//   }
// }

// 13

// let userInput: string | null = prompt("Enter a string:");

// if (userInput !== null) {
//   let originalStr: string = userInput.trim().toLowerCase();
//   let reversedStr: string = originalStr.split('').reverse().join('');

//   if (originalStr === reversedStr) {
//     console.log("Entered string is a palindrome");
//   } else {
//     console.log("Entered string is not a palindrome");
//   }
// }


// 14

// let sizeInput: string | null = prompt("Enter the size of arrays");

// if (sizeInput !== null) {
//   let size: number = parseInt(sizeInput);

//   function getMatrixInput(matrixName: string): number[][] {
//     let matrix: number[][] = [];
//     alert(`Enter values for ${matrixName}, row by row :`);

//     for (let i = 0; i < size; i++) {
//       let rowInput: string | null = prompt(`Enter row ${i + 1} of ${matrixName}:`);
//       if (rowInput !== null) {
//         let row: number[] = rowInput.trim().split(/\s+/).map(val => parseInt(val));
//         if (row.length === size) {
//           matrix.push(row);
//         } else {
//           console.log("Each row must contain " + size + " numbers");
//           return [];
//         }
//       }
//     }

//     return matrix;
//   }

//   let matrix1 = getMatrixInput("Array 1");
//   let matrix2 = getMatrixInput("Array 2");

//   if (matrix1.length === size && matrix2.length === size) {
//     let sumMatrix: number[][] = [];

//     for (let i = 0; i < size; i++) {
//       let row: number[] = [];
//       for (let j = 0; j < size; j++) {
//         row.push(matrix1[i][j] + matrix2[i][j]);
//       }
//       sumMatrix.push(row);
//     }

//     console.log("Sum of 2 arrays is:");
//     sumMatrix.forEach(row => {
//       console.log(row.join(' '));
//     });
//   }
// }

// 15
// function getArray(): number[] {
//     let input: string | null = prompt("Enter array values:");
//     if (input !== null) {
//       return input.split(',').map(val => parseInt(val.trim()));
//     }
//     return [];
//   }
  
//   function displayArray(arr: number[]): void {
//     console.log("The array values are:");
//     console.log(arr.join(', '));
//   }
  
//   function main(): void {
//     let arr: number[] = []; 
//     arr = getArray();       
//     displayArray(arr);      
//   }
  
//   main();
  

// 16

// function isPrime(num: number): boolean {
//     if (num <= 1) return false;
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
  
//   function main(): void {
//     let input: string | null = prompt("Enter a number:");
//     if (input !== null) {
//       let num: number = parseInt(input);
  
//       if (isPrime(num)) {
//         console.log("number is a Prime number");
//       } else {
//         console.log("number is NOT a Prime number");
//       }
//     }
//   }

//   main();
  
// 17

// class Calculator {
//     // Method for addition
//     addition(a: number, b: number): number {
//       return a + b;
//     }
  
//     // Method for subtraction
//     subtraction(a: number, b: number): number {
//       return a - b;
//     }
  
//     // Method for multiplication
//     multiplication(a: number, b: number): number {
//       return a * b;
//     }
  
//     // Method for division
//     division(a: number, b: number): number {
//       if (b === 0) {
//         console.log("Error: Division by zero is not allowed.");
//         return NaN; // Return NaN for division by zero
//       }
//       return a / b;
//     }
//   }
  
//   // Main function to drive the program
//   function main(): void {
//     let calc = new Calculator(); 
//     let operation: string | null = prompt("Choose an operation:\n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division");
  
//     let num1: number = parseFloat(prompt("Enter the first number:") || "0");
//     let num2: number = parseFloat(prompt("Enter the second number:") || "0");
  
//     switch (operation) {
//       case "1":
//         console.log(`Result of Addition: ${calc.addition(num1, num2)}`);
//         break;
//       case "2":
//         console.log(`Result of Subtraction: ${calc.subtraction(num1, num2)}`);
//         break;
//       case "3":
//         console.log(`Result of Multiplication: ${calc.multiplication(num1, num2)}`);
//         break;
//       case "4":
//         let result = calc.division(num1, num2);
//         if (!isNaN(result)) {
//           console.log(`Result of Division: ${result}`);
//         }
//         break;
//       default:
//         console.log("Invalid operation choice.");
//     }
//   }
  
//   main();
 

// 18

// function calculateGrade(writtenTest: number, labExams: number, assignments: number): number {
//     let weightedGrade = (writtenTest * 70) / 100 + (labExams * 20) / 100 + (assignments * 10) / 100;
//     return weightedGrade;
//   }
  
//   function main(): void {
//     let writtenTest: number = parseFloat(prompt("Enter marks for Written Test:") || "0");
//     let labExams: number = parseFloat(prompt("Enter marks for Lab Exams:") || "0");
//     let assignments: number = parseFloat(prompt("Enter marks for Assignments:") || "0");
  
//     let grade = calculateGrade(writtenTest, labExams, assignments);
//     console.log(`Grade of the student is: ${grade}`);
//   }
  
//   main();
  

// 19

// function calculateTax(income: number): number {
//     let tax: number = 0;
  
//     if (income <= 250000) {
//       tax = 0;
//     } else if (income > 250000 && income <= 500000) {
//       tax = (income - 250000) * 0.05;
//     } else if (income > 500000 && income <= 1000000) {
//       tax = (250000 * 0.05) + (income - 500000) * 0.20;
//     } else if (income > 1000000 && income <= 5000000) {
//       tax = (250000 * 0.05) + (500000 * 0.20) + (income - 1000000) * 0.30;
//     }
  
//     return tax;
//   }
  
//   function main(): void {
//     let income: number = parseFloat(prompt("Enter the annual income:") || "0");
    
//     if (income < 0) {
//       console.log("Invalid income amount.");
//       return;
//     }
  
//     let tax = calculateTax(income);
//     console.log(`Income tax amount = ${tax.toFixed(2)}`);
//   }
  
//   main();
  

// 20

// function printPattern(): void {
//     let num: number = 1;
  
//     for (let i = 1; i <= 4; i++) {
//       let row = '';
//       for (let j = 1; j <= i; j++) {
//         row += num + '\t'; 
//         num++;              
//       }
//       console.log(row); 
//     }
//   }
  
//   printPattern();
  

// 21

// function multiplyAdjacent(arr: number[]): number[] {
//     let result: number[] = [];
    
//     for (let i = 0; i < arr.length - 1; i++) {
//       result.push(arr[i] * arr[i + 1]);  // Multiply adjacent values and store in result array
//     }
  
//     return result;
//   }
  
//   function main(): void {
//     let limit: number = parseInt(prompt("Enter the array limit:") || "0");
//     let array: number[] = [];
    
//     for (let i = 0; i < limit; i++) {
//       let value: number = parseInt(prompt(`Enter value ${i + 1} of the array:`) || "0");
//       array.push(value);  
//     }
    
//     let result = multiplyAdjacent(array);
    
//     console.log("Output:");
//     console.log(result.join('\t'));  
//   }
  
//   main();
  

// 22

function getArray(rows: number, cols: number): number[][] {
    let array: number[][] = [];
    
    for (let i = 0; i < rows; i++) {
      let row: number[] = [];
      for (let j = 0; j < cols; j++) {
        let value: number = parseInt(prompt(`Enter value for array[${i + 1}][${j + 1}]:`) || "0");
        row.push(value);
      }
      array.push(row);
    }
    
    return array;
  }
  
  function addArray(array1: number[][], array2: number[][], rows: number, cols: number): number[][] {
    let resultArray: number[][] = [];
    
    for (let i = 0; i < rows; i++) {
      let row: number[] = [];
      for (let j = 0; j < cols; j++) {
        row.push(array1[i][j] + array2[i][j]);  
      }
      resultArray.push(row);
    }
    
    return resultArray;
  }
  
  function displayArray(array: number[][]): void {
    console.log("Sum of array 1 and array 2:");
    for (let i = 0; i < array.length; i++) {
      console.log(array[i].join('\t'));  
    }
  }
  
  function main(): void {
    let size: number = parseInt(prompt("Enter the size of the array (rows/columns):") || "0");
    
    console.log("Enter the values of array 1");
    let array1 = getArray(size, size);  
    
    console.log("Enter the values of array 2");
    let array2 = getArray(size, size);  
    
    let sumArray = addArray(array1, array2, size, size);  
    
    displayArray(sumArray);  
  
  main();
  



// export{}