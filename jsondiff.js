const object1 = require('./obj1.json');
const object2 = require('./obj2.json');

function printAllKeys(object) {
    for (key in object) {
        if (typeof object[key] === "object") {
            printAllKeys(object[key]);
        } else {
            console.log(key);
        }
    }
}


printAllKeys(object1);