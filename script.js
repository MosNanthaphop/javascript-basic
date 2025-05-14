function showMessage() {
    alert("This is an External script!");
}

import { add, greet, name, person, arr } from './module.js';

console.log(add(5, 3));
console.log(greet()); 
console.log(name);
console.log(person);
console.log(arr);