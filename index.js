var recipes = {prop: 1};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, recipes, {[key]: value});
}
updateObjectWithKeyAndValue(recipes, "prop2", "2")

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
 object[key] = value
 return object
}

function deleteFromObjectByKey(object, key) {
  var newObj = Object.assign({}, object)
  delete newObj.key
 
}