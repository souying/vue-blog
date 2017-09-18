<template>
  
<div class="topic">
	<transition name="fade">
		<loading v-show="loading"></loading>
	</transition>
	<top-nav></top-nav>
	<div class="main">
		<h1 class="title">{{ topic.tname }}</h1>
		<div class="tag">
			<span>{{ topic.time }}</span>
			<span>分类：{{ cate }}</span>
			<span>标签：{{ topic.tag }}</span>
		</div>
		<div class="clear"></div>
		<div class="box-bottom"></div>
		<img class="topic-img" :src="topic.imgurl" :alt="topic.tname">
		<div v-html="content" class="content" v-highlight>
			
		</div>
	</div>
	<!-- 底部菜单 -->
	<bottom></bottom>
</div>

</template>

<script>
import marked from 'marked'
// var marked = require('../assets/js/marked.js');

import TopNav from './TopNav'
import Bottom from './Bottom'
import Loading from './Loading'
export default {
  name: 'topic',
  components: {
    TopNav,Bottom,Loading
  },
  data () {
    return {
        id:this.$route.params.id,
        topic:'',
        cate:'',
        content:'',
        loading:true
    }
  },
  created (){
  	// console.log(this.id);
  	this.$http.post('http://www.jiaoyiba.cc/api/details',{id:this.id},{emulateJSON:true}).then(function(data){
  		// console.log(data)
  		this.topic = data.body;
  		this.cate = data.body.cate.catename;
  		// console.log(this.topic.tcontent)
  		this.content = marked(this.topic.tcontent,{ sanitize: true })
  		this.loading = false;
  	})
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	body{
		background: #f0f0f0;
	}
	.topic{
		width:7.5rem;
		height:auto;
		overflow:hidden;
		margin:0 auto;
	}
	.main{
		width:6.9rem;
		height:auto;
		padding:0.3rem 0.1rem;
		margin:0 auto;
		margin-top:0.3rem;
		background:#fff;
		border:1px solid #f0f0f0;
		overflow:hidden;
	}
	.title{
		font-size:0.38rem;
		color:#333;
		overflow : hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		line-height:0.5rem;
		-webkit-box-orient: vertical;
	}
	.tag>span{
		font-size:0.3rem;
		float:left;
		color:#666;
		padding-right: 0.2rem;
		padding-top: 0.15rem;
		overflow:hidden;
	}
	.clear{
		clear: both;
	}
	.box-bottom{
		margin-top:0.3rem;
		border-bottom: 0.01rem solid #ccc;
		margin-bottom:0.5rem;
	}
	.topic-img{
		width:100%;
		height:3rem;
		margin-bottom:0.3rem;
	}
	.content p{
		color:#333;
		font-size: 0.32rem;
		margin-bottom:0.5rem;
	}
	.fade-enter-active, .fade-leave-active {
	      transition: opacity .5s
	    }
	    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
	      opacity: 0
	    }
</style>