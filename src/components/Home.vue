<template>
  
	<div class="home">
		<transition name="fade">
			<loading v-show="loading"></loading>
		</transition>
	  		<top-nav></top-nav>
			<banner v-bind:bannerlists="bannerlists"></banner>
		<div class="title">
			<span>推荐文章</span>
			<!-- <a href="">更多</a> -->
		</div>
		<div class="main">
			<router-link v-for="item in homeshow" :to="'/topic/'+item._id" class="item" :key ="item._id">
				<img class="item-img" :src="item.imgurl" :alt="item.tname">
				<div class="item-con">
					<h2>{{ item.tname }}</h2>
					<p>{{ item.tj }}</p>
				</div>
			</router-link>
		</div>
		<!-- 底部菜单 -->
		<bottom></bottom>
	</div>

</template>

<script>
import TopNav from './TopNav'
import Banner from './Banner'
import Bottom from './Bottom'
import Loading from './Loading'
export default {
  name: 'home',
  components: {
    Banner,Bottom,TopNav,Loading
  },
  data () {
    return {
        bannerlists:'',
        homeshow:[],
        loading:true
    }
  },
	created(){
		this.$http.get('http://www.jiaoyiba.cc/api/top').then(function(data){
	  		// console.log(data.body)
	  		this.bannerlists = data.body;
	  		// console.log(this.bannerlists)
	  	});
  		this.$http.get('http://www.jiaoyiba.cc/api/show').then(function(data){
	  		this.homeshow = data.body.slice(0,12);
	  		// console.log(this.homeshow);
	  		this.loading = false;
	  	})
	},

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
		.home{
			width:7.5rem;
			height:auto;
			overflow:hidden;
			margin:0 auto;
		}
		body{
			background:#f0f0f0;
		}
		.more>h3{
			font-weight: 400;
		}
		.title{
			width:7.02rem;
			padding:0 0.24rem;
			height:1rem;
			color:#333;
			font-size:0.28rem;
			line-height:1.05rem;
		}
		.title>a{
			text-decoration:none;
			color:#333;
			float:right;
		}
		.title:after{
			display:block;
            clear:both;
            content:"";
            visibility:hidden;
            height:0;
		}
		.main{
			width:7.02rem;
			height:auto;
			margin:0 auto;
			overflow: hidden;
			border:1px solid #ccc;
			border-bottom:1px solid #fff;
		}
		.item{
			display:block;
			width:6.7rem;
			height:1.48rem;
			padding:0.2rem 0.2rem;
			border-bottom: 1px solid #ccc;
			border-radius:0.05rem;
			background: #fff;
		}
		.item-img{
			width:2.24rem;
			height:1.38rem;
			border-radius:0.1rem;
			border: 1px solid #ccc;
			float:left;
		}
		.item-con{
			padding-top:0.15rem;
			padding-right:0.1rem;
			width:4.2rem;
			height:1.38rem;
			float:right;
		}
		.item-con>h2{
			font-weight:400;
			height:0.3rem;
			font-size:0.3rem;
			color:#3385ff;
			overflow : hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 1;
			-webkit-box-orient: vertical;
		}
		.item-con>p{
			font-size:0.26rem;
			height:0.6rem;
			line-height:0.32rem;
			color:#333;
			margin-top:0.3rem;
			overflow : hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
		.fade-enter-active, .fade-leave-active {
	      transition: opacity .5s
	    }
	    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
	      opacity: 0
	    }
</style>
