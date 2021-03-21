# Solidity-CodeScreen-Fibonacci
Example CodeScreen Solidity coding assessment that requires the candidate to write a method that returns the nth element in the Fibonacci sequence.

As this code will run in the `Ethereum Virtual Machine (EVM)`, don't worry about running out of gas when calculating Fibonacci
for large values of n.

The sequence is assumed to be `0-indexed`, with `fibonacci(0)` returning 0 and `fibonacci(1)` returning 1.

The contract to write this method in is [contracts/Fibonacci.sol](contracts/Fibonacci.sol)

The test cases that are run and are visible to the candidate are located in [test/FibonacciTest.js](test/FibonacciTest.js).

The test cases that are not visible to the candidate are located in [test/FibonacciHiddenTest.js](test/FibonacciHiddenTest.js).

## Requirements

The `TestFibonacci.js` file should not be modified. If you would like to add your own unit tests, you
can add these in a separate file in the `test` folder. These files can be either Solidty or Javascript tests, and must use
the `Truffle` testing framework.

You are free to use whichever libraries you want when implementing your solution.

The [package.json](package.json) file should only be modified in order to add any third-party dependencies required for your solution. The `truffle` and `truffle-assertions` versions should not be changed.

## Tests

To compile the contracts during development, use `truffle compile`.

Run `npm install` to install all dependencies and then run `npm run test` to run the unit tests. These should all pass if your solution has been implemented correctly.

##

Good luck!
