var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {[key]: value});
}
updateObjectWithKeyAndValue(recipes, "prop2", "2")

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  var prop2 = 2;
  recipes["prop2"] = 2
  return recipes;
}
destructivelyUpdateObjectWithKeyAndValue(recipes, "prop2", 2)