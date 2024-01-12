function cached(fn) {
  const cache = {};
  return (...args) => {
    // create a unique key for caching purposes
    const key = JSON.stringify(args);
    if (key in cache) { // in 會找prototype chain, Object.hasOwnProperty不會, both works here fine
      return cache[key];
    } else {
      const val = fn(...args);
      cache[key] = val;
      return val;
    }
  };
}

function expensiveOperation(n) {
  // console.log(`Performing expensive operation for ${n}`);
  return n * 2;
}

const cachedExpensiveOperation = cached(expensiveOperation);
// Call the cached function
console.log(cachedExpensiveOperation(3)); // This will perform the operation and log the message
console.log(cachedExpensiveOperation(3)); // This will use the cached result and not perform the operation again
console.log(cachedExpensiveOperation(5)); // This will perform the operation for a different argument
console.log(cachedExpensiveOperation(5)); // This will use the cached result for the second set of arguments