const object1 = require('./obj1.json');
const object2 = require('./obj2.json');
const fs = require('fs');

function compareObjects(base,newObject) {
    const diffs = {};
    // calls the compare method for every key of the current level to get all changes and deleted keys
    for (let key in base) {
        compare(base[key],newObject[key], key, diffs);
    }
    // iterates over the new object to check for added keys
    for (let key in newObject) {
        if (!base[key]) {
            diffs[key] = "added";
        }
    }
    return diffs;
}

function compare(item1, item2, key, diffs) {
    // if the key does not exist in the newObject it was deleted
    if (item2 === undefined) {
        diffs[key] = "deleted";
        return;
    }
    // if the current item is a object it recursively tests the nested object for differences
    if (typeof item1 === "object") {
        const objDiff = compareObjects(item1, item2);
        if (Object.keys(objDiff).length > 0) {
            diffs[key] = objDiff;
        }
        return;
    } else {
        // if the content of the item has changed it will show what the new value is
        if (item1 !== item2) {
            diffs[key] = "Changed from " + item1 + " to " + item2;
        }
    }
}

const d = compareObjects(object1, object2, {});

const data = JSON.stringify(d);
fs.writeFile('difference.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});