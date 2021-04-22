const object1 = require('./obj1.json');
const object2 = require('./obj2.json');
const fs = require('fs');

function compareObjects(obj1, obj2) {
    const diffs = {};
    for (let key in obj1) {
        compare(obj1[key], obj2[key], key, diffs);
    }
    for (let key in obj2) {
        if (!obj1[key]) {
            diffs[key] = "added";
        }
    }
    return diffs;
}

function compare(item1, item2, key, diffs) {
    if (item2 === undefined) {
        diffs[key] = "deleted";
        return;
    }
    if (typeof item1 === "object") {
        const objDiff = compareObjects(item1, item2);
        if (Object.keys(objDiff).length > 0) {
            diffs[key] = objDiff;
        }
        return;
    } else {
        if (item1 !== item2) {
            diffs[key] = item2;
        }
    }
}

process.argv.forEach((val, index) => {
    console.log(`${index}: ${val}`)
})

const d = compareObjects(object1, object2, {});

const data = JSON.stringify(d);
fs.writeFile('difference.json', data, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");
});