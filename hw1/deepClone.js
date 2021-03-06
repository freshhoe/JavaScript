function deepClone(object) {
  function getType(object) {
    return Object.prototype.toString.call(object).slice(8, -1).toLowerCase();
  }

  function cloneArray() {
    return object.map(item => deepClone(item));
  }

  function cloneObject() {
    const clone = {};

    Object.keys(object).forEach(key => (clone[key] = deepClone(object[key])));

    return clone;
  }

  const objectType = getType(object);
  if (objectType === 'array') return cloneArray();
  if (objectType === 'object') return cloneObject();
  return object;
}

export default deepClone;
