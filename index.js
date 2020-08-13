var recipes = {prop: 1};
var obj = {prop2: 2};
Object.assign(recipes, obj);
console.log(recipes)
function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {prop2: 2});
}


function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return recipes = {prop: 1, prop2: 2}
}