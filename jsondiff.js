const object1 = require('./obj1.json');
const object2 = require('./obj2.json');

function printAllKeys(object) {
    for (key in object) {
        if (typeof object[key] === "object") {
            printAllKeys(object[key]);
        } else {
            console.log(key + object[key]);
        }
    }
}


function compareObjects(obj1, obj2) {
    var diffs = {};
    for (let key in obj1) {
        compare(obj1[key], obj2[key], key, diffs);
    }
    return diffs;
}

function compare(item1, item2, key, diffs) {
    if(item2 === undefined){
        diffs[key] = undefined;
        return;
    }
    if (typeof item1 === "object") {
        const objDiff = compareObjects(item1, item2);
        if(Object.keys(objDiff).length > 0){
            diffs[key] = objDiff;
        }
        return;
    } else {
        if (item1 !== item2) {
            diffs[key] = item2;
        }
    }
}

const d = compareObjects(object1, object2, {});
printAllKeys(d);