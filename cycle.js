function cycle(...values) {
  let index = 0
  return () => {
    let currentValue = values[index]
    index = (index + 1) % values.length // 善用餘數
    return currentValue
  }
}

const onOffFn = cycle('on', 'off');
console.log(onOffFn()); // "on"
console.log(onOffFn()); // "off"
console.log(onOffFn()); // "on"