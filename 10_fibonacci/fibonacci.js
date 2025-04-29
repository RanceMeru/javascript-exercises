const fibonacci = function(number) {
    // Convert input to number
    let count;
    if (typeof number !== 'number') {
        count = parseInt(number);
    } else {
        count = number;
    }

    // Handle edge cases
    if (count < 0) return "OOPS";
    if (count === 0) return 0;

    // Initialize array with first two Fibonacci numbers
    const fib = [0, 1]; 

    // Build sequence up to requested index
    for (let i = 2; i <= count; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[count];
};

module.exports = fibonacci;
