function makeChange(amount) {
    const quarters = Math.floor(amount / 25);
    amount %= 25;

    const dimes = Math.floor(amount / 10);
    amount %= 10;

    const nickels = Math.floor(amount / 5);
    amount %= 5;

    const pennies = amount;

    return {
        q: quarters,
        d: dimes,
        n: nickels,
        p: pennies
    };
}
// Example usage:
const c=prompt("Enter c: ");
//console.log(makeChange(amount)); // Output: { q: 1, d: 2, n: 0, p: 2 }
// Do not the change the code below
//const c = prompt("Enter c: ");
const jsonArray = JSON.stringify(makeChange(Number(c)));
alert(jsonArray); // Output: [1,2,3,4,5]
//alert(JSON.stringify(makeChange(c));
