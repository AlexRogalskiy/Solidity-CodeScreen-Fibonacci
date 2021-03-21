const CodeScreenContract = artifacts.require('../Fibonacci.sol');
let instance;

contract("Fibonacci", accounts => {

    beforeEach('setup', async () => {
        instance = await CodeScreenContract.new();
    });

    it("Should calculate fibonaccis 0th sequence", async function() {
        assert.equal(await instance.fib(0), 0);
    });

    it("Should calculate fibonaccis 5th sequence", async function() {
        assert.equal(await instance.fib(5), 5);
    });

    it("Should calculate fibonaccis 10th sequence", async function() {
        assert.equal(await instance.fib(10), 55);
    });

    it("Should calculate fibonaccis 15th sequence", async function() {
        assert.equal(await instance.fib(15), 610);
    });
});