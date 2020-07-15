## day02/crowller

### 1. ts实时打包编译

生成tsconfig.json配置文件并修改配置
```
tsc --init; // 生成配置

+"outDir": "./build", // 修改配置
```

安装concurrently, 并行执行多条命令
> npm i concurrently -D;

修改package.json
```
"dev:build": "tsc -w", // -w, 自动编译
"dev:start": "nodemon node ./build/app.js",
-"dev": "concurrently npm run dev:build & npm run dev:start"
+"dev": "concurrently npm:dev:*"
```

### 2. [ts配置](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

直接输入*tsc*命令，才会执行tsconfig.json

## 爬虫项目
### react构建前端界面
#### 初始化项目
```
npm uninstall create-react-app -g  // 卸载之前npx安装可能存在的老版本
npx create-react-app frontend-crowller --template typescript --use-npm // 使用npm(默认yarn)
```

