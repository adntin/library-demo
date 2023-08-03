# Library Rollup 说明

## 参考文档

1. [rollup/rollup-starter-lib TS 版本](https://github.com/rollup/rollup-starter-lib/tree/typescript)
2. [rollup/rollup-starter-lib JS 版本](https://github.com/rollup/rollup-starter-lib)
3. [Creating Awesome TypeScript NPM Packages](https://levelup.gitconnected.com/creating-awesome-typescript-npm-packages-5d97ac342361)

## 先决条件

1. NPM 要求包名唯一，可以用命令行查询

```shell
npm search library-rollup
```

2. 创建远程仓库，并克隆下来

```shell
git clone https://github.com/adntin/library-demo.git
```

## Scaffolding the Library, 搭建库

1. `package.json`安装依赖包

```shell
yarn add -D eslint \
            prettier \
            typescript \
            tslib \
            rollup \
            @rollup/plugin-commonjs \
            @rollup/plugin-node-resolve \
            @rollup/plugin-typescript
```

2. `package.json`配置运行脚本

```json
{
  "scripts": {
    // dev: Run Rollup in watch mode (-w) to detect changes to files during development
    "dev": "rollup -c -w",
    // build: Run Rollup to build our production release distributable
    "build": "rollup -c"
  }
}
```

4. `package.json`配置输出文件

```json
// main: CommonJS (CJS) output file
// module: ES Module (ESM) output file
// browser: Universal Module Definition (UMD) output file
// files: Our files will be built to a “dist” folder
{
  "main": "dist/library-demo.cjs.js",
  "module": "dist/library-demo.esm.js",
  "browser": "dist/library-demo.umd.js",
  "files": ["dist"]
}
```

5. TypeScript Configuration, `tsconfig.json`配置

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "moduleResolution": "Node",
    "strict": true,
    "esModuleInterop": true
  }
}
```

6. Rollup Configuration, `rollup.config.js`配置

## Setting up the Development Environment, 搭建开发环境

1. 创建应用工程（TypeScript 版本）

```shell
yarn create react-app my-app --template typescript
```

2. `library-rollup`项目配置

```shell
# 关联包
yarn link
# Start Rollup in watch mode
yarn dev
```

3. `package.json`配置

```shell
# 关联包
yarn link library-rollup
# 添加自研库依赖
yarn add file:../library-rollup
```

```json
{
  "type": "module",
  "dependencies": {
    "library-rollup": "file:../library-rollup"
  }
}
```

4. `tsconfig.json`配置

```json
{
  "baseUrl": ".",
  "paths": {
    "library-rollup": ["node_modules/library-rollup/src"],
    "library-rollup/*": ["node_modules/library-rollup/src/*"]
  }
}
```

## Documentation 文档

1.  添加依赖包

```shell
yarn add -D typedoc
```

2.  添加脚本

```json
"scripts": {
  "docs": "typedoc src --out docs",
}
```

3.  生成文档

```shell
yarn docs
```

## Publishing 发布

```shell
# 1. 登录 NPM 帐号
npm login
# 2. 发布 NPM 包
# 参数说明 [--access <public|restricted>]
npm publish --access public
```
