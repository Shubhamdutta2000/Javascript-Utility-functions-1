const object1 = {

};

const object2 = {
  topic: "Hacktoberfest",
};

function isEmpty(object) {
  for (var key in object) {
    if (object.hasOwnProperty(key)) return false;
  }
  return true;
}

console.log(isEmpty(object1));
// the output will be TRUE

console.log(isEmpty(object2));
// the output will be FALSE
