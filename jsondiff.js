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



function compareObjects(obj1, obj2, diff){
    for(key in obj1){
        if(obj2.hasOwnProperty(key)){
            if(typeof obj1[key] === "object"){
                compareObjects(obj1[key], obj2[key]);
            }else{
                console.log("both objects have the " + key + " key");
                if(obj1[key] !== obj2[key]){
                    console.log("but the content has changed");
                }
            }
        }else{
            console.log("second object is missing the " + key + "key");
        }
    }
}

compareObjects(object1, object2, {});
