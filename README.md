# Decimal to Roman Numerals Converter
  > Convert any decimal integer from 1 - 3999 to the equivalent roman numeral.

## Setup
Install packages with [npm](https://www.npmjs.com/):
```sh
$ npm install
```

## Running Tests
[See test definition](./test.js)
```sh
$ npm test
```

## Install Directly from npm
```sh
$ npm install --save decimal-to-roman-converter
```
To use
```sh
const generator = require('decimal-to-roman-converter');
generator(3999);
``` 

## Approach
### Understanding

- First step in creating the generator was to understand all the possible decimal - roman translationss. 
- Although there is only 7 distinct roman symbols, given the subtractive pattern that is used it would mean a total of 13 different translations were possible:

Decimal | Roman 
:---: | :---: 
1000 | M 
900 | CM     
500 | D     
400 | CD     
100 | C      
90 | XC     
50 | L      
40 | XL     
10 | X      
9 | IX     
5 | V      
4 | IV     
1 | I      

### Function

- Each decimal - roman translation were separated into their own object for easily accessing the values later.
- They were then put into an array from highest - lowest decimal value.
- The order of the array is crucial to given that roman numerals read from left - right the same as decimal values.
- To actually generate the roman numeral is a simple process:
  - Loop through the translations array.
  - While the supplied number is greater than or equal to that index's decimal value then:
    - Append the roman value to the conversion string.
    - The subtract the decimal value from the supplied number.
  - If the supplied number is less than the index's decimal value then move to the next index in the array.
  - Finally once the array has been looped through return the generated roman conversion.

### Handling Errors

- To make the function robust there are two custom error objects created to effectively handle wrong inputs:
  - If the input is not a number (in JavaScript terms) it will throw a NotNumberException
  - If the input is a number but not within the range 1 - 3999 (the general limit for roman numerals) or is not a valid Integer then it will throw a NotValidIntegerException
- Returning custom errors will mean the user will have a good understanding of why their input is wrong
- All the error handling is done at the start of the function to stop any unecessary code executin.

### Testing

- The jest package was installed as the testing framework - it allows you to create tests that output human readable test cases.
- Instead of testing all possible values from 1 - 3999 only a selected set of test cases were included:
  - As set of simple values to prove the generator was working.
  - A set of more complicated numbers that tested the generator was handling the subtractive pattern correctly.
  - A set of non-valid integers to make sure the proper error was returned.
  - A set of values that were not a number to make sure the proper error was returned.

## Assumptions
- Without testing all the integers from 1 - 3999 it is assumed that the limited test case is sufficient to prove functionality.
- It is assumed that a test case that makes most use of the subtractive pattern is the most likely, if any, to be wrong given that it uses the [subtractive pattern](https://www.roman-numerals.org/subtract.html).

## Technologies Utilised
  - Node v10.15.0
  - npm v6.4.1
  - jest