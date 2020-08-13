var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {[key]: value});
}
const recipes = {prop: 1}
updateObjectWithKeyAndValue(recipes, "prop2", "2")

