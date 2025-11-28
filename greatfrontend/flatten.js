function flatten(value) {
  while (value.some(Array.isArray)) {
    value = [].concat(...value);
  }
}

const result = flattern([1, [[2], [3]]]);
