var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {[key]: value});
}
updateObjectWithKeyAndValue(recipes, "prop2", "2")

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  return recipes["key"] = "value";
}
destructivelyUpdateObjectWithKeyAndValue(recipes, "prop2", 2)