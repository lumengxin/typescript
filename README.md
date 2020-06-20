## day02/crowller
### 1.ts实时打包编译

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



