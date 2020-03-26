const obj1 = {
    numbers: [12, 4, 9, 36],
    mods: [],
    modulo: 3,
    setModulo: function(newModulo) {
        this.modulo = newModulo;
        this.mods = this.numbers.map(x => x % this.modulo);
    }
}

const obj2 = {
    numbers: [12, 4, 9, 36],
    mods: [],
    _modulo: 3,
    set modulo(modulo) {
        this._modulo = modulo;
        this.mods = this.numbers.map(x => x % this._modulo);
    }
}


obj1.setModulo(3); // write this line
obj2.modulo = 3;
const test1 = JSON.stringify(obj1.mods) === '[0,1,0,0]';
console.assert(test1, 'Test 1');

const test2 = JSON.stringify(obj2.mods) === '[0,1,0,0]';
console.assert(test2, 'Test 2');


obj1.setModulo(2); // write this line
obj2.modulo = 2;
const test3 = JSON.stringify(obj1.mods) === '[0,0,1,0]';
console.assert(test3, 'Test 3');

const test4 = JSON.stringify(obj2.mods) === '[0,0,1,0]';
console.assert(test4, 'Test 4');


obj1.modulo = 6;
obj2.modulo = 6;

const test5 = JSON.stringify(obj1.mods) === '[0,0,1,0]';
console.assert(test5, 'Test 5');

const test6 = JSON.stringify(obj2.mods) === '[0,4,3,0]';
console.assert(test6, 'Test 6');