# Vue Template Plugin

一个 vue 插件模版，用于发布到 npm，使用 rollup 构建  
支持 `vue2` 和 `vue3`

# 打包过程

```shell
# 1. 构建，实际上执行  npx rimraf dist && rollup --config rollup.config.js
# 作用：打包前删除 dist 文件夹，然后 rollup 打包
yarn build
# 2. 登陆 npm 账号, 没账号就去 npm 注册一个
npm login
# 3. 发布
npm publish
```

### 注意事项

1. 记得改项目中项目名、打包文件名、作者、git地址等信息
2. 你可以访问 http://registry.npmjs.org/<package_name> 来查询 npm 包是否被人发布过，<package_name> 表示要查询的包名，返回 {"error":"Not found"} 就是没被发布过
3. 每次发布都需要改版本号，可以在 package.json 里改，也可以输入 npm version <update_type> 来改，
   <update_type> 可以为具体的版本号(如1.2.3)，也可以为 patch, minor, or major 中一个。依次为补丁，小改，大改
4. 删除包可用 npm unpublish <package_name>\[@\<version\>\] 命令删除，需要注意，删除后 24 小时不能重复发布同名包，且删除后重新发布，之前版本记录还在，
   可以使用 npm deprecate <package_name>\[\@\<version\>\] <message> 代替删除
# 安装依赖

Vue2 用户需要额外安装 composition-api

```shell
yarn add @vue/composition-api
```

Vue3 用户无需其他操作

# 安装后开始使用

以 [VaTex](https://github.com/Shimada666/VaTex) 为例

### `Vue3`

#### 注册为全局组件

```ts
import {createApp} from 'vue'
import VueLatex from 'vatex'

const app = createApp(App)

app
  .use(VueLatex)
  .mount('#app')
```

然后

```vue

<vue-latex :expression="'\\frac{a_i}{1+x}'" display-mode/>
```

#### 单独引入

在 vue 文件中

```vue

<template>
  <vue-latex :expression="'\\frac{a_i}{1+x}'" display-mode/>
</template>
<script lang="ts">
import {defineComponent} from 'vue'
import {VueLatex} from 'vatex'

export default defineComponent({
  components: {
    VueLatex
  }
})
</script>

```

### `Vue2`

#### 注册为全局组件

```ts
import Vue from 'vue';

Vue.use(VueKatex);
```

#### 单独引入

todo... 我相信你会
