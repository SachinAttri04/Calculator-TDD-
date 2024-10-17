function add(input) {
    if (input === '') return 0;

    let delimiter = /[,\n]/; // default delimiters
    let numbers = input;

    // Check for custom delimiter
    if (input.startsWith('//')) {
        const parts = input.split('\n');
        delimiter = new RegExp(parts[0].slice(2)); // get the custom delimiter
        numbers = parts[1]; // get the numbers part
    }

    const numArray = numbers.split(delimiter).map(Number);

    const negatives = numArray.filter(n => n < 0);
    if (negatives.length) {
        throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return numArray.filter(n => n <= 1000).reduce((sum, num) => sum + num, 0);
}

module.exports = { add };
