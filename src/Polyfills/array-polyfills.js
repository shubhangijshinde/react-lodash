Array.prototype.myMap = function(callback) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        temp.push(callback(this[i], i, this));
    }

    return temp;
}

Array.prototype.myFilter = function(callback) {
    let temp = [];

    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            temp.push(this[i]);
        }
    }
    return temp;
}

Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue;
  for(let i = 0; i< this.length; i++) {
    acc = acc ? callback(acc, this[i], i, this) : this[i];
  }
  return acc;
}

let numArray = [1, 2, 3, 4, 5];

console.log(numArray.myMap((num) => num * 2));
console.log(numArray.myFilter((num) => num%2 === 0));
let value1 = numArray.reduce((acc, num) => {
	return acc + num
}, 0);

let value2 = numArray.reduce((acc, num) => {
	return acc + num
}, 1);
console.log(value1)
console.log(value2)