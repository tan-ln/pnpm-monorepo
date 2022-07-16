# pnpm monorepo

## 项目目录
```
|- apis
|- components
|- packages
    |- admin-client
    |- h5-client
    |- web-client
```

## 引入 workspace
`pnpm add @tanln/apis`

修改配置项
```json
{
  "name": "@tanln/components",
  "version": "0.0.1",
  "main": "index.ts",
}
```