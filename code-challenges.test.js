// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// describe("stringCode", () => {
//     it("takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
//         const secretCodeWord1 = "Lackadaisical"
//         // Expected output: "L4ck4d41s1c4l"
//         const secretCodeWord2 = "Gobbledygook"
//         // Expected output: "G0bbl3dyg00k"
//         const secretCodeWord3 = "Eccentric"
//         // Expected output: "3cc3ntr1c"
//         expect(stringCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(stringCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(stringCode(secretCodeWord3)).toEqual("3cc3ntr1c")

//     })
// })

//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: stringCode is not defined

// b) Create the function that makes the test pass.

//Goal: Takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

//Pseudocode:
// Create a function expression that takes a string as a parameter. (stringCode)
// Use for loop and .length property to setup function iterations.
// Have the function invoke the replace method on the given parameter thru the created variable (secretString), to replace the given vowel indexes to integers. 
// Have the function return the expected output. 

// const stringCode= (secretString) => {
//     for (let i=0; i <secretString.length; i++) {
//         if (secretString[i] = "a") {
//             return secretString[i].replace("a",4) 
//         }
//         else if(secretString[i] = "e") {
//             return secretString[i].replace("e",3)
//         }
//         else if(secretString[i] = "i") {
//             return secretString[i].replace("i",1)
//         }
//         else if(secretString[i] = "o") {
//             return secretString[i].replace("o",0)
//         } else {
//             return secretString[i]
//         }
//     }
// }

//* RAN TEST (RESULTS BELOW): *//

// FAIL  ./code-challenges.test.js
// stringCode
//   ✕ takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (2 ms)

// ● stringCode › takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

//   expect(received).toEqual(expected) // deep equality

//   Expected: "L4ck4d41s1c4l"
//   Received: "L"

//     24 |         const secretCodeWord3 = "Eccentric"
//     25 |         // Expected output: "3cc3ntr1c"
//   > 26 |         expect(stringCode(secretCodeWord1)).toEqual         ("L4ck4d41s1c4l")
//        |                                             ^
//     27 |         expect(stringCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//     28 |         expect(stringCode(secretCodeWord3)).toEqual("3cc3ntr1c")
//     29 |

// ** NOTES TO INSTRUCTOR **: I'm not to sure why I don't have a passing test or what Jest expecting from me with this one, it seems to have an issue with my Line #26 (as shown in the error message section above). Found this very frustrating to say the least (this is why my code is commented out).


// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("singularLetter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a"
        // Expected output: ["Mango", "Apricot", "Peach"]
        const letterE = "e"
        // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(singularLetter(fruitArray)).toEqual(["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"])
        expect(singularLetter(letterA)).toEqual(expect.arrayContaining["Mango", "Apricot", "Peach"])
        expect(singularLetter(letterE)).toEqual(expect.arrayContaining["Cherry", "Blueberry", "Peach"])

    })
})


//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: singularLetter is not defined

// b) Create the function that makes the test pass.

//Goal: Takes in an array of words and a single letter and returns an array of all the words containing that particular letter. 

//Pseudocode:
// Create a function expression that takes an array as a parameter. (singularLetter).
// Set the parameter as letterArray.
// Use .map to iterate over function and then use .filter set to return words with specific letter as defined by previously given variables. 
// 

// const singularLetter= (letterArray) => {
//     for (let i=0; i <letterArray.length; i++) {
//         if (letterArray[i] = "a") {
//             return letterArray
//         }
//         else if(letterArray[i] = "e") {
//             return letterArray
//         } else {
//             return letterArray
//         }
//     }
// }

// const singularLetter= (letterArray) => {
//   letterArray.map(letters).filter("a" && "e")
//   return 
// }

//* RAN TEST (RESULTS BELOW): *//

//  ReferenceError: letters is not defined

// ** NOTES TO INSTRUCTOR **: For Part A/Jest portion - I wasn't sure on if we should use "expect.arrayContaining" or not but it was reminding me of that one from Week 4's test so if not I think I may have been overthinking it? As for the rest of the problem (Part B), I spent 2 hours and I'm still lost on how to approach it or arrange/do what my pseudocode is suggestion, I honestly don't even know how to go about it and it made me question my whole knowledge base, so I didn't fully complete it and got errors for my test. 


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouseArray", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a “full house", () => {
        const hand1 = [5, 5, 5, 3, 3]
        // Expected output: true
        const hand2 = [5, 5, 3, 3, 4]
        // Expected output: false
        const hand3 = [5, 5, 5, 5, 4]
        // Expected output: false
        expect(fullHouseArray(hand1)).toEqual(true)
        expect(fullHouseArray(hand2)).toEqual(false)
        expect(fullHouseArray(hand3)).toEqual(false)

    })
})

//* RAN TEST (RESULTS BELOW): *//

// ReferenceError: fullHouseArray is not defined

// b) Create the function that makes the test pass.

//Goal: Takes in an array of 5 numbers and determines whether or not the array is a “full house. 

//Pseudocode:
// Declare a function expression that takes an array as a parameter. (fullHouseArray).
// Set the parameter as numbersArray.
// Create for loop that defines "full house" values as true. 
// Run the function using given parameters. 
// Reutrn with the expected output. 

const fullHouseArray= (numbersArray) => {
    for (let i=0; i <numbersArray.length; i++) {
        if (numbersArray[i] == [5, 5, 5, 3, 3]) {
            return "true" 
        } else {
            return "false"
        }
    }
}
//* RAN TEST (RESULTS BELOW): *//

// ● fullHouseArray › takes in an array of 5 numbers and determines whether or not the array is a “full house

// expect(received).toEqual(expected) // deep equality

// Expected: true
// Received: "false"

//   158 |         const hand3 = [5, 5, 5, 5, 4]
//   159 |         // Expected output: false
// > 160 |         expect(fullHouseArray(hand1)).toEqual(true)
//       |                                       ^
//   161 |         expect(fullHouseArray(hand2)).toEqual(false)
//   162 |         expect(fullHouseArray(hand3)).toEqual(false)
//   163 |


// ** NOTES TO INSTRUCTOR **: Looks like I have the same issue going on here as I got for #1 - Part B, so for starters... I can assume there's a structure issue with my describe method - Part A for this one as well? 