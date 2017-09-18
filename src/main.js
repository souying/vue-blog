// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import App from './App'
import Routes from './router/router'
import hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css' //样式文件
import '../src/assets/css/reset.css'
import Rem from '../src/assets/js/rem.min.js'
new Rem({
	desinWidth:750, //750这个值，根据设计师的psd宽度来修改，是多少就写多少，插件默认750 
	num:100         //100这个值，是1rem = 100px的比例 默认100比1的 可修改自己的比例 计算
})


Vue.config.productionTip = false

Vue.use(VueResource)
Vue.use(VueRouter)

// 自定义指令
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
// 创建路由
const router = new VueRouter({
	routes : Routes,
	mode : "history" 
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router
})
