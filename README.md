# Vite NPM Package

## 参考

[React Component Library with Vite and Deploy in NPM](https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff)

## 先决条件

1. 你需要有 Git
2. 你需要有 NodeJS 和 NPM
3. 你需要有一个 NPM 帐号

## 初始化和创建组件库

1. 搭建项目

```shell
# https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project
yarn create vite library-vite --template react-ts
```

2. 配置 prettier 和 eslint

```shell
yarn add -D eslint
yarn add -D eslint-config-prettier
yarn add -D eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-prettier
yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser
yarn add -D prettier
```

3. 配置 husky 和 lint-staged

```shell
yarn add -D husky lint-staged
```

```json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.{js,jsx,ts,tsx}": ["yarn  eslint", "yarn  format"]
  }
}
```

4. 创建组件

5. 配置`vite.config.ts`文件

```shell
yarn add -D vite-plugin-dts vite-plugin-linter vite-tsconfig-paths
```

6. 配置`tsconfig.json`文件
