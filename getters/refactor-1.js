const obj1 = {
  name: 'obj1',
  getGreeting: function () {
    return `hi, I'm ${this.name}`;
  }
}

const obj2 = {
  name: 'obj2',
  get greeting() {
    // write me!
  }
}

const obj1Greeting1 = obj1.getGreeting();
console.assert(obj1Greeting1 === `hi, I'm obj1`, `obj1's greeting is correct (1)`);

const obj2Greeting1 = __; // fix this line!
console.assert(obj2Greeting1 === `hi, I'm obj2`, `obj2's greeting is correct (1)`);

obj1.name = "first";
obj2.name = "second";

const obj1Greeting2 = obj1.getGreeting();
console.assert(obj1Greeting2 === `hi, I'm first`, `obj1's greeting is correct (2)`);

const obj2Greeting2 = __; // fix this line!
console.assert(obj2Greeting2 === `hi, I'm second`, `obj2's greeting is correct (2)`);
