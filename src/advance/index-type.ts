// 索引类型

let obj = {
  a: 1,
  b: 2,
  c: 3,
};

function getValue(obj: any, keys: string[]): number[] {
  return keys.map((key) => obj[key]);
}

getValue(obj, ["a", "b"]); // [1, 2]

interface Obj {
  a: number;
  b: string;
}

let key: keyof Obj;
let value: Obj["a"];

// 类型约束
// T extends U

function getValueT<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map((key) => obj[key]);
}

console.log(getValueT(obj, ["a", "b"]));

// 错误
// getValueT(obj, ['f', 'd'])
