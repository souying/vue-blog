<template>
  
<div class="list">
	<transition name="fade">
		<loading v-show="loading"></loading>
	</transition>
	<top-nav></top-nav>
	<div class="main">
		<router-link v-for="item in list" :to="'/topic/'+item._id" class="item" :key ="item._id">
			<img class="item-img" :src="item.imgurl" :alt="item.tname">
			<div class="item-con">
				<h2>{{ item.tname }}</h2>
				<p>{{ item.tj }}</p>
			</div>
		</router-link>
	</div>
	<div v-show="is" class="data_none">没有数据了</div>
	<div class="page">
		<li><a v-on:click.prevent="prev" href="javascript:;">上一页</a></li>
		<li><a v-on:click.prevent="next" href="javascript:;">下一页</a></li>
	</div>
	<!-- 底部菜单 -->
	<bottom></bottom>
</div>

</template>

<script>
import TopNav from './TopNav'
import Bottom from './Bottom'
import Loading from './Loading'
export default {
  name: 'list',
  components: {
    TopNav,Bottom,Loading
  },
  data () {
    return {
        id:this.$route.params.id,
        page:this.$route.params.page,
        list:'',
        is:false,
        loading:true
    }
  },
  created (){
	this.$http.post('http://www.jiaoyiba.cc/api/listpage',{
		id:this.id,
    page:this.page
	  	},{emulateJSON:true}).then(function(data){
	  		// console.log(data)
  		if(data.body.length!=0){
  			this.list = data.body;
  			this.is = false;
  			this.loading = false;
  		}else if(data.body.length==0){
  			this.is = true;
  		}
  		// console.log(this.list);
  		
  	})
  },
  watch:{
  	  $route(){
  	  	this.loading =true;
  	  	this.getdata();
      	// alert("改变");
    }
  },
  methods:{
  	prev:function(){
  		if(this.page<=1){
  			this.page = 1;
  			// window.location.href = '/list/'+this.id+'/'+this.page;
  			this.getdata();
  		}else{
  			this.page = parseInt(this.page)-1;
  			// window.location.href = '/list/'+this.id+'/'+this.page;
  			this.getdata();
  		}
  	},
  	next:function(){
  		this.page = parseInt(this.page)+1;
  		// window.location.href = '/list/'+this.id+'/'+this.page;
  		this.getdata();
  	},
  	getdata:function(){
  		this.id = this.$route.params.id
  		this.$http.post('http://www.jiaoyiba.cc/api/listpage',{
	  		id:this.id,
	        page:this.page
	  	},{emulateJSON:true}).then(function(data){
	  		// console.log(data)
	  		if(data.body.length!=0){
	  			this.list = data.body;
	  			this.is = false;
	  			this.loading = false;
	  		}else if(data.body.length==0){
	  			this.is = true;
	  		}
	  		// console.log(this.list);
	  	})
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.list{
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
		line-height:1rem;
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
		margin-top:0.3rem;
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
		width:4.2rem;
		height:1.38rem;
		float:right;
	}
	.item-con>h2{
		font-weight:400;
		font-size:0.3rem;
		height:0.3rem;
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
	.page{
		margin-left:0.2rem;
		margin-top:0.4rem;
		margin-bottom:1rem;
	}
	.page a{
		float:left;
		margin-right:0.3rem;
		width:2rem;
		height:0.6rem;
		border:0.01rem #3385ff solid;
		line-height:0.6rem;
		text-align:center;
		color:#3385ff;
		font-size:0.28rem;
		text-decoration:none;
	}
	.data_none{
		width:5rem;
		height:1rem;
		margin:0 auto;
		color:red;
		font-size:0.36rem;
		text-align:center;
		line-height:1rem;
		margin-top:1rem;
		margin-bottom:3rem;
	}
	.fade-enter-active, .fade-leave-active {
	      transition: opacity .5s
	    }
	    .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
	      opacity: 0
	    }
</style>