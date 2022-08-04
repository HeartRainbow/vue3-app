# vue3-app

## Project setup
```bash
npm install
```

### Compiles and hot-reloads for development
```bash
npm run serve
```

### Compiles and minifies for production
```bash
npm run build:prod
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## 代码规范

### 文件引入
1. 以首字母按26字母顺序排列；
2. 路径越近的在前排列；
3. 第三方包在前，项目自身文件在后；
4. 包，文件之间间隔一行；
5. 语句结尾必须加分号；
   
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
https://ruanyifeng.com/blog/2015/08/git-use-process.html<br>
https://www.bookstack.cn/read/git-tutorial/docs-commands-git-stash.md

### 分支命名
1. 以功能英文描述加短横杠，例:（image-upload-oss）；
2. 以姓名拼音加横杠拼接，例:（lai-qi-bin）；

### 提交规范
1. 每次提交或新建分支先拉取合并master代码到当前分支；
2. commit提交信息以（type(scope): desc）例：
   
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
3. https://segmentfault.com/a/1190000041878613

### 常用git命令
| Command                     | Description                                     |
| :---                        |    ----                                         |
| git add .                   | 将所有修改加入暂存区（包括修改、删除、新增文件）         |
| git add <file>              | 将指定文件加入暂存区（包括修改、删除、新增文件）         |
| git commit -m "desc"        | 提交本次修改到本地仓库                              |
| git commit --amend          | 更改上次提交信息，与上一次提交是同一个提交              |
| git push                    | 将本地仓库的修改推送到远程仓库                        |
| git push origin <branch>    | 推送到指定的远程分支                                |
| git pull                    | 拉取指定分支代码到本地                               |
| git pull origin <branch>    | 合并指定分支到当前分支                               |
| git merge <branch>          | 将当前分支与指定分支合并                             |
| git status                  | 查看文件状态                                       |
| git branch                  | 列出所有本地分支                                    |
| git branch -a               | 列出所有本地分支和远程分支                            |
| git checkout                | 切换到指定分支                                      |
| git checkout -b             | 创建并切换到指定分支                                 |
| git clone <url>             | 克隆远程分支                                       |
| git stash                   | 暂存没有提交的工作                                  |
| git stash list              | 列出所有暂时保存的工作                               |
| git stash apply stash@{1}   | 恢复某个暂时保存的工作                               |
| git stash pop               | 恢复最近一次stash的文件                             |
| git stash drop              | 丢弃最近一次stash的文件                             |
| git stash clear             | 删除所有的stash                                    |
| git remote -v               | 显示所有的远程主机                                  |
| git remote add origin <url> | 添加远程仓库                                       |
| git remote show name        | 列出某个主机的详细信息                               |


## 学习资源：  
**插件开发**
    1.Chrome 插件开发<br>
    https://www.cnblogs.com/liuxianan/p/chrome-plugin-develop.html<br>
    http://www.kkh86.com/it/chrome-extension-doc/extensions/api_index.html

**vue配置**
    1.vue-cli3 全面配置<br>
    https://gitee.com/leerayn/vue-cli3-config

**TypeScript**
1. 教程<br>
   https://ts.xcatliu.com/advanced/class-and-interfaces.html

2. 简易DI容器实现<br>
    https://www.cnblogs.com/o2team/archive/2021/08/26/15190818.html

**软件资源**
    https://github.com/lanbao2021/share?unpf=1

## 工具
> 前端滑块验证<br>
> https://www.cnblogs.com/queenDream/p/12760077.html


# 软件破解

## Navicat
> https://www.cnblogs.com/no-celery/p/14824579.html

**C/C++ 从零实现一个windows窗口（非常详细）**
> https://blog.csdn.net/weixin_50964512/article/details/124140735?spm=1001.2101.3001.6650.3&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-3-124140735-blog-79450832.pc_relevant_multi_platform_whitelistv1_exp2&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7ECTRLIST%7Edefault-3-124140735-blog-79450832.pc_relevant_multi_platform_whitelistv1_exp2&utm_relevant_index=6

**Nginx根据域名分发不同端口**
> https://blog.csdn.net/m0_37190495/article/details/91442671?spm=1001.2101.3001.6650.14&utm_medium=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-14-91442671-blog-113682483.pc_relevant_multi_platform_whitelistv3&depth_1-utm_source=distribute.pc_relevant.none-task-blog-2%7Edefault%7EBlogCommendFromBaidu%7Edefault-14-91442671-blog-113682483.pc_relevant_multi_platform_whitelistv3&utm_relevant_index=20