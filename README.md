# VUE3
vue3....

## tree shaking

## vue3的
- 可以支持TS
- proxy
- 打包 渲染 内存
- composition API

## 创建vue3
- cue-cli
```
vue --version
vue create vue3-cli

```
- vite - 新一代前端构建工具 - 原本是webpack - grunt - gulp
开发环境中,无需打包 可以快速冷启动
清凉快速热重载
真正的按需编译
```
npm init vite-app <project-name>
cd <project-name>
npm install
npm run dev
```

## setup()
- 不要与vue2弄混,vue2可以访问到vue3 的数据 但是vue3 不能
- setup不能async 是一个被promise包裹的对象
