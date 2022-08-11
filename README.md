# vue3-app
技术栈：</br>
vue3+typescript+webpack+vue-class-components的前端基础框架</br></br>
特点：</br>
- 所有组件均使用class语法书写，深入面向对象的思维</br>
- 融合IOC的理念，将基础服务与业务代码解耦，结合AOP切面编程，开发体验丝般顺滑</br>
- 封装常用的工具函数；如：时间处理，execl自定义导出，表单校验回滚，...</br>
- 封装常用的基础组件；如：echarts，...</br>
- 环境配置一个yaml文件搞定，不再频繁修改各种env</br>


### 安装依赖
```bash
npm install
```

### 运行（开发环境）
```bash
npm run dev
```

### 打包（生产环境）
```bash
npm run build:prod
```

### 配置文档
See [Configuration Reference](https://cli.vuejs.org/config/).

## 代码规范

### 文件引入
- 以首字母按26字母顺序排列；
- 路径越近的在前排列；
- 第三方包在前，项目自身文件在后；
- 包，文件之间间隔一行；
- 语句结尾必须加分号；
   
示例：
   ```typescript
    import { createStore } from 'vuex';
    import modules from './modules';
    import getters from './getters';

    export default createStore({
        modules,
        getters
    })
   ```

## git规范
>每次开发新功能，都应该新建一个单独的分支。<br>
- [Git 使用规范流程](https://ruanyifeng.com/blog/2015/08/git-use-process.html)
- [Git 教程](https://www.bookstack.cn/read/git-tutorial/README.md)


### 分支命名
- 以功能英文描述加短横杠，例:（image-upload-oss）；
- 以姓名拼音加横杠拼接，例:（lai-qi-bin）；

### [Git Commit 规范](https://segmentfault.com/a/1190000041878613)
- 每次提交或新建分支先拉取合并master代码到当前分支
- commit提交信息以（type(scope): desc）例：
   
    ```bash
    git commit -m "feat: 图片上传OSS"

    type 用于说明提交的类别

    feat：新功能（feature）
    fix：修补bug
    docs：只改动了文档相关的内容（documentation）
    style：代码格式（不影响代码运行的变动）
    build：构造工具的或者外部依赖的改动，例如webpack，npm
    refactor: 代码重构时使用
    revert: 执行git revert打印的message
    perf：性能优化（Performance improvement）
    test：测试文件的改动
    ci：与持续集成服务有关的改动
    chore：不修改src或者test的其余修改，例如构建过程或辅助工具的变动

    ```

### 常用git命令
| Command                     | Description                                     |
| :---                        |    ----                                         |
| git add .                   | 将所有修改加入暂存区（包括修改、删除、新增文件）         |
| git add \<file\>              | 将指定文件加入暂存区（包括修改、删除、新增文件）         |
| git commit -m "desc"        | 提交本次修改到本地仓库                              |
| git commit --amend          | 更改上次提交信息，与上一次提交是同一个提交              |
| git push                    | 将本地仓库的修改推送到远程仓库                        |
| git push origin \<branch\>    | 推送到指定的远程分支                                |
| git pull                    | 拉取指定分支代码到本地                               |
| git pull origin \<branch\>    | 合并指定分支到当前分支                               |
| git merge \<branch\>          | 将当前分支与指定分支合并                             |
| git status                  | 查看文件状态                                       |
| git branch                  | 列出所有本地分支                                    |
| git branch -a               | 列出所有本地分支和远程分支                            |
| git checkout                | 切换到指定分支                                      |
| git checkout -b             | 创建并切换到指定分支                                 |
| git clone \<url\>             | 克隆远程分支                                       |
| git stash                   | 暂存没有提交的工作                                  |
| git stash list              | 列出所有暂时保存的工作                               |
| git stash apply stash@{1}   | 恢复某个暂时保存的工作                               |
| git stash pop               | 恢复最近一次stash的文件                             |
| git stash drop              | 丢弃最近一次stash的文件                             |
| git stash clear             | 删除所有的stash                                    |
| git remote -v               | 显示所有的远程主机                                  |
| git remote set-url origin \<url\> | 修改远程仓库地址                                       |
| git remote add origin \<url\> | 添加远程仓库                                       |
| git remote show name        | 列出某个主机的详细信息                               |


### 插件开发
- [Chrome插件开发攻略](https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html)
- [Chrome插件开发文档（中文版）](http://www.kkh86.com/it/chrome-extension-doc/extensions/api_index.html)

### vue
 - [vue-cli3配置](https://gitee.com/leerayn/vue-cli3-config)
    

### TypeScript
- [深入理解TypeScript](https://jkchao.github.io/typescript-book-chinese/#why)
- [简易DI容器实现](https://www.cnblogs.com/o2team/archive/2021/08/26/15190818.html)
