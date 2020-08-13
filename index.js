var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {prop2: 2}, {prop: 1}, {prop: "new value"});
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return recipes = {prop: 1, prop2: 2}
}