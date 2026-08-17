class ArrayWrapper {
  constructor(nums) {
    this.nums = nums;
  }

  valueOf() {
    return this.nums.reduce((acc, val) => acc + val, 0);
  }

  toString() {
    return `[${this.nums.join(",")}]`;
  }
}

const a = new ArrayWrapper([1, 2, 3]);
const b = new ArrayWrapper([4, 5]);

console.log(a + b);     
console.log(String(a));   
console.log(String(b));   
