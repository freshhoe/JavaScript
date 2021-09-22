function isEqual(value1, value2) {
  if (arguments.length < 2)
    throw new TypeError(
      `isEqual requires at least 2 argument, but only ${arguments.length} were passed`
    );

  function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
  }

  function areArraysEqual() {
    if (value1.length !== value2.length) return false;

    for (let i = 0; i < value1.length; i++) {
      if (!isEqual(value1[i], value2[i])) return false;
    }

    return true;
  }

  function areObjectsEqual() {
    if (Object.keys(value1).length !== Object.keys(value2).length) return false;

    for (let key in value1) {
      if (Object.prototype.hasOwnProperty.call(value1, key)) {
        if (!isEqual(value1[key], value2[key])) return false;
      }
    }

    return true;
  }

  const value1Type = getType(value1);
  if (value1Type !== getType(value2)) return false;

  if (value1Type === 'array') return areArraysEqual();
  if (value1Type === 'object') return areObjectsEqual();
  return Object.is(value1, value2);
}

export default isEqual;
