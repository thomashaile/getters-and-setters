const obj1 = {
    name: 'obj1',
    getGreeting: function() {
        return `hi, I'm ${this.name}`;
    }
}

const obj2 = {
    name: 'obj2',
    get greeting() {
        // write me!
        return `hi, I'm ${this.name}`;
    }
}

const obj1Greeting1 = obj1.getGreeting();
const test1 = obj1Greeting1 === `hi, I'm obj1`;
console.assert(test1, 'Test 1');

const obj2Greeting1 = obj2.greeting; // fix this line!
const test2 = obj2Greeting1 === `hi, I'm obj2`;
console.assert(test2, 'Test 2');

obj1.name = "first";
obj2.name = "second";

const obj1Greeting2 = obj1.getGreeting();
const test3 = obj1Greeting2 === `hi, I'm first`;
console.assert(test3, 'Test 3');

const obj2Greeting2 = obj2.greeting; // fix this line!
const test4 = obj2Greeting2 === `hi, I'm second`;
console.assert(test4, 'Test 4');