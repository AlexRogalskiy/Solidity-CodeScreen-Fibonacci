const CodeScreenContract = artifacts.require('../Fibonacci.sol');
let instance;

contract("Fibonacci", accounts => {

    beforeEach('setup', async () => {
        instance = await CodeScreenContract.new();
    });

    it("Should calculate fibonaccis 8th sequence", async function() {
        assert.equal(await instance.fib(8), 21);
    });

    it("Should calculate fibonaccis 11th sequence", async function() {
        assert.equal(await instance.fib(11), 89);
    });

    it("Should calculate fibonaccis 14th sequence", async function() {
        assert.equal(await instance.fib(14), 377);
    });

    it("Should calculate fibonaccis 16th sequence", async function() {
        assert.equal(await instance.fib(16), 987);
    });
});