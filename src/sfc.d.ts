// TODO 声明文件待分离

/**
 * 告诉 TypeScript *.vue 后缀的文件可以交给 vue 模块来处理
 * 而在代码中导入 *.vue 文件的时候，需要写上 .vue 后缀。
 * 原因还是因为 TypeScript 默认只识别 *.ts 文件，不识别 *.vue 文件
 */

declare module '*.vue' {
  import Vue from 'vue';

  export default Vue;
}

// declare module 'vue/types/vue' {
//   // 可以使用 `VueConstructor` 接口
//   // 来声明全局属性
//   interface VueConstructor {
//     install: any;
//   }
// }

/**
 * 告诉 TypeScript window是个全局对象，直接可用，这样就不会在window.xx = 123时报错
 */
interface Window {
  Vue: any;
}

declare var window: Window & typeof globalThis;
// declare var require: any;

// typings.d.ts
declare module '*.json' {
  const value: any;
  export default value;
}
