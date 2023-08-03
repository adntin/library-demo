export { default as getDateTime } from './getDateTime';

// tsconfig.json#compilerOptions.lib=["ES6"]
// 箭头函数
export const sayHi: VoidFunction = () => {
  console.log('Hi');
};
// Promise
const p = new Promise((resolve, reject) => {
  if (Math.random() > 0.5) {
    resolve(true);
  } else {
    reject(false);
  }
});
p.then((v) => console.log('promise.resolve:', v)).catch((v) => console.log('promise.reject:', v));
// 扩展运算符
const a = ['name', 'age'];
const b = [...a, 'school'];
console.log(b);

// tsconfig.json#compilerOptions.lib=["ES7"]
// https://googlechrome.github.io/samples/array-includes-es7/
export function includesES7<T>(arr: Array<T>, item: T): boolean {
  return arr.includes(item);
}

// tsconfig.json#compilerOptions.lib=["DOM"]
export function setDocumentTitle(title: string) {
  document.title = title;
}
