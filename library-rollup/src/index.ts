export { default as getDateTime } from './getDateTime';

// // tsconfig.json#compilerOptions.lib=["ES6"]
// const p = new Promise((resolve, reject) => {
//   if (Math.random() > 0.5) {
//     resolve(true);
//   } else {
//     reject(false);
//   }
// });
// p.then((v) => console.log(v)).catch((v) => console.error(v));

// const a = ['name', 'age'];
// const b = [...a, 'school'];
// console.log(b);

// // tsconfig.json#compilerOptions.lib=["ES7"]
// // https://googlechrome.github.io/samples/array-includes-es7/
// export function includesES7<T>(arr: Array<T>, item: T): boolean {
//   return arr.includes(item);
// }

// // tsconfig.json#compilerOptions.lib=["DOM"]
// export function setDocumentTitle(title: string) {
//   document.title = title;
// }

export const sayHi: VoidFunction = () => {
  console.log('Hi');
};

// export function sum(a: number, b: number) {
//   return a + b;
// }
