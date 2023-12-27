function lodashGet(object, path, defaultValue) {
}

const object = { a: [{ b: { c: 3 } }] };
console.log(lodashGet(object, ['a', '0', 'b', 'c'], 'default'));
console.log(lodashGet({ a: { b: 2 }, c: 1 }, 'a.b'));

// Writing object != null would check for undefined and null at the same time.