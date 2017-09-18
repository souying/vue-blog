<template>
 	<div class="top-nav">
        <div class="top">
            <h1>谷建文博客</h1>
            <a class="top-icon" v-on:click.prevent="show" href="javascript:;"></a>
        </div>
        <transition name="slide-fade">
            <div class="bg" v-show="navshow" v-on:click.prevent="show">
                <ul class="nav" v-on:click.stop>
                    <router-link :to="'/'">首页</router-link>
                    <router-link v-for="item in nav" :to="'/list/'+item._id+'/1'" :key ="item._id">{{ item.catename }}</router-link></li>
                    <!-- <li v-for="item in nav"><a :href="'/list/'+item._id+'/1'">{{ item.catename }}</a></li> -->
                </ul>
            </div> 
         </transition> 
    </div>
</template>

<script>
// import Home from './components/Home'
export default {
  name: 'top-nav',
  data (){
  	return {
        navshow:false,
        nav:''
  	}
  },
  created(){
    this.$http.get('http://www.jiaoyiba.cc/api/catelist').then(function(data){
        // console.log(data)
        this.nav = data.body;
        // console.log(this.nav);
    })
  },
  methods:{
    show:function(){
        if(this.navshow){
            this.navshow = false;
        }else{
            this.navshow = true;
        }
    }
  }
}
</script>

<style scoped>
  	     .top{
            position:relative;
            width:7.5rem;
            height:0.8rem;
            background: yellowgreen;
        }
        .top>h1{
            color:#fff;
            text-align: center;
            font-size: 0.4rem;
            line-height:0.8rem;
            font-weight: 400;
        }
        .top-icon{
            display: block;
            position:absolute;
            width:0.4rem;
            height:0.4rem;
            top:0.2rem;
            right:0.3rem;
            background:url(../assets/img/nav.png);
            background-size: contain;
            background-repeat: no-repeat;
        }
        .top-icon>img{
            width:0.4rem;
            height:0.4rem;
        }
        .bg{
            height:100%;
            position:fixed;
            z-index:99;
            width:100%;
            background:rgba(0,0,0,0.1);
        }
        .nav{
            width:3rem;
            min-height:15rem;
            background:#fff;
        }
        .nav li{
            height:0.8rem;
            font-size:0.3rem;
            color:#333;
            line-height:0.8rem;
            text-align:center;
        }
        .nav a{
            display:block;
            text-decoration:none;
            color:#333;
            height:0.8rem;
            font-size:0.3rem;
            color:#333;
            line-height:0.8rem;
            text-align:center;
        }
        .slide-fade-enter-active {
          transition: all .3s ease;
        }
        .slide-fade-leave-active {
          transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
        }
        .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active for below version 2.1.8 */ {
          transform: translateX(10px);
          opacity: 0;
        }
</style>