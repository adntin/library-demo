# Vite NPM Package

## 参考

[React Component Library with Vite and Deploy in NPM](https://articles.wesionary.team/react-component-library-with-vite-and-deploy-in-npm-579c2880d6ff)

## 必备条件

1. 你需要有 Git
2. 你需要有 NodeJS 和 NPM
3. 你需要有一个 NPM 帐号，如果你没有，请创建一个。

## 初始化工程配置和创建组件库

1. 搭建 React 项目

```shell
# https://cn.vitejs.dev/guide/#scaffolding-your-first-vite-project
yarn create vite library-vite --template react-ts
```

2. 配置 prettier 和 eslint

```shell
# 1. 配置 eslint, 最终配置看`.eslintrc.json`
yarn add -D eslint
yarn eslint --init
# You can also run this command directly using 'npm init @eslint/config'.
# Need to install the following packages:
#   @eslint/create-config@0.4.6
# Ok to proceed? (y) y
# ✔ How would you like to use ESLint? · problems
# ✔ What type of modules does your project use? · esm
# ✔ Which framework does your project use? · react
# ✔ Does your project use TypeScript? · Yes
# ✔ Where does your code run? · browser
# ✔ What format do you want your config file to be in? · JavaScript
# The config that you've selected requires the following dependencies:
# @typescript-eslint/eslint-plugin@latest eslint-plugin-react@latest @typescript-eslint/parser@latest
# ✔ Would you like to install them now? · Yes
# ✔ Which package manager do you want to use? · yarn

# 2. 配置 prettier, 最终配置看`.prettierrc`
yarn add -D react-hooks eslint-plugin-simple-import-sort prettier

# 3. 添加脚本, 最终配置看`package.json`
# "lint": "eslint 'src/**/*.{js,jsx,ts,tsx}'",
# "lint:fix": "eslint --fix 'src/**/*.{jsx,ts,tsx}'",
# "format": "prettier --write src//**/*.{ts,tsx,css} --config ./.prettierrc",
```

3. 配置 husky 和 lint-staged, 需要在根目录运行，因为`.git`文件夹在根目录

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

4. 创建业务组件

5. 配置 `vite.config.ts` 文件

```shell
yarn add -D @vitejs/plugin-react vite-plugin-dts vite-plugin-linter vite-tsconfig-paths
```

6. 配置 `tsconfig.json` 和 `tsconfig.node.json` 文件

7. 配置 `package.json` 文件

8. 发布 NPM

```shell
npm login
npm publish
```
