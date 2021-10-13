const unique = (arr) => {
    const prims = {"boolean":{}, "number":{}, "string":{}}, objects = [];

    return arr.filter((item) => {
        const type = typeof item;
        if(type in prims)
            return prims[type].hasOwnProperty(item) ? false : (prims[type][item] = true);
        else
            return objects.indexOf(item) >= 0 ? false : objects.push(item);
    });
}

console.log(unique(["apple", "orange", "apple", 1, 5, 1, 1, 2]));
// output - [ 'apple', 'orange', 1, 5, 2 ]