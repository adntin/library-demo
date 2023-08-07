# Vite NPM Package

## 参考

[React Component Library with Vite and Deploy in NPM](https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff)

## 步骤

1. 搭建项目

```shell
# https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project
yarn create vite library --template react-ts
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
