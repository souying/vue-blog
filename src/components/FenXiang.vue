<template>
  <div class="fen-xiang">
    <div class="bottom_btn">
        <a class="home" id="share" v-on:click.prevent="show" href="javascript:;"></a>
    </div>
    <transition name="slide-fade">
    <div class="share-container" v-show="is" v-on:click="show">
       <div class="layer-share">
          <ul v-if="share" class="share-icon-wrap" v-on:click.stop>
              <li v-on:click="kWeixin" class="share-icon-item">
                  <span class="img-box">
                      <img src="../assets/img/wx.png">
                  </span>
                  <span class="text-box">微信好友</span>
              </li>
              <li v-on:click="kWeixinFriend" class="share-icon-item">
                  <span class="img-box">
                      <img src="../assets/img/wx_zone.png">
                  </span>
                  <span class="text-box">朋友圈</span>
              </li>
              <li v-on:click="kSinaWeibo" class="share-icon-item">
                  <span class="img-box">
                      <img src="../assets/img/wb.png">
                  </span>
                  <span class="text-box">新浪微博</span>
             </li>
              <li v-on:click="kQQ" class="share-icon-item"> 
                  <span class="img-box">
                      <img src="../assets/img/qq.png">
                  </span>
                  <span class="text-box">QQ好友</span>
              </li>
              <li v-on:click="kQZone" class="share-icon-item">
                  <span class="img-box">
                      <img src="../assets/img/qq_zone.png">
                  </span>
                  <span class="text-box">QQ空间</span>
              </li>
          </ul>
          <div v-else class="cory-link-wrap" v-on:click.stop>
              <span class="cory-tit">长按复制下方链接，去粘贴给好友吧：</span>
              <span class="cory-cont">
                  <a :href="href" target="_blank" class="cory-cont-link">{{ href }}</a>
              </span>
          </div>
          <!-- <span class="btn-close" v-on:click="show">取消</span> -->
        </div>
        <div class="layer-shade"></div>
    </div>
    </transition>
  </div>
</template>

<script>
// import mobileShare from '../assets/js/share.dev.js'
// import '../assets/css/share.css'
export default {
  name: 'feng-xiang',
  data (){
  	return {
      href:'',
      title:'',
      img:'',
      desc:'',
      from:'',
      is:false,
      share:true
  	}
  },
  created(){
    // this.href = window.location.href;
    // this.title = document.title || "";
    // this.img = document.getElementsByName("img")[0] && document.getElementsByName("img")[0].src || "";
    // this.desc = document.getElementsByName("description") || "";
    // this.from = window.location.host;
  },
  methods:{
  	 show:function(){
        if(this.is){
          this.is = false;
        }else{
          this.is = true;
          this.share = true;
          this.href = window.location.href;
          this.title = document.title || "";
          this.img = document.getElementsByName("img")[0] && document.getElementsByName("img")[0].src || "";
          this.desc = document.getElementsByName("description") || "";
          this.from = window.location.host;
        }
     },
     kWeixin:function(){
        this.share = false
     },
     kWeixinFriend:function(){
        this.share = false
     },
     kSinaWeibo:function(){
        var wbLink = 'http://v.t.sina.com.cn/share/share.php?title='+ this.title+'&url='+this.href+'&content=utf-8&sourceUrl='+this.href+'&pic='+this.img;
          window.open(wbLink);
     },
     kQQ:function(){
        var qqLink = 'http://connect.qq.com/widget/shareqq/index.html?url=' + this.href + '&title=' + this.title + '&description=' + '' + '&charset=utf-8';
          window.open(qqLink);
     },
     kQZone:function(){
        var qzLink = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?site=www.tuan2.com&title=' + this.title + '&desc=' + this.desc + '&summary=' + '分享分享' + '&url=' + this.href + 'pic' + this.img;
          window.open(qzLink);
     }
  }
}
</script>

<style scoped>
        .bottom_btn{
        	margin-top:0.1rem;
            width:33.3%;
            height:100%;
            float:left;
        }
        .bottom_btn>a{
            text-decoration: none;
            display:block;
            margin:0 auto;
            width:0.88rem;
            height:0.98rem;
            background-repeat: no-repeat;
            background-size: contain;
        }
        .home{
            background:url(../assets/img/fenxiang.png);
        }
        /*插件样式*/
    .layer-shade{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: rgba(0,0,0,0.4);
      z-index: 9;
    }
    .layer-share{
      position: fixed;
      bottom: 0;
      width: 100%;
      max-width: 750px;
      background-color: #fff;
      z-index: 999;
      color: #666;
    }
    .share-icon-wrap{
      font-size: 0;
      margin: 15px 0 5px 0;
    }
    .share-icon-item{
      margin-bottom: 10px;
      width: 25%;
      display: inline-block;
      text-align: center;
    }
    .share-icon-item .img-box{
      margin: auto;
      width: 60px;
      height: 60px;
      display: block;
    }
    .share-icon-item img{
      width: 100%;
    }
    .share-icon-item .text-box{
      margin-top: 5px;
      display: inline-block;
      font-size: 12px;
    }
    .btn-close{
      margin: 10px auto 0;
      width: 100%;
      height: 48px;
      line-height: 48px;
      text-align: center;
      background-color: #f3f3f3;
      color: #666;
      border: 1px solid #ddd;
      font-size: 16px;
      display: block;
      box-sizing: border-box;
    }
    .cory-link-wrap{
      padding: 15px 20px;
    }
    .cory-link-wrap .cory-tit{
      margin-bottom: 15px;
      font-size: 16px;
      display: block;
    }
    .cory-link-wrap .cory-cont{
      padding: 7px 10px;
      width: 100%;
      border: 1px solid #d9d9d9;
      display: block;
      box-sizing: border-box;
      word-break: break-all;
    }
    .cory-link-wrap .cory-cont-link{
      display: block;
      text-decoration: none;
      font-size: 14px;
      color: #333;
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