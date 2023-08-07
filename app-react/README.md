# 使用说明

1. 关联自研包

```shell
yarn link library-rollup
yarn link library-vite
```

2. 配置`tsconfig.json`文件

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "library-rollup": ["node_modules/library-rollup/src"],
      "library-rollup/*": ["node_modules/library-rollup/src/*"],
      "library-vite": ["node_modules/library-vite/src"],
      "library-vite/*": ["node_modules/library-vite/src/*"]
    }
  }
}
```
