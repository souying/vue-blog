<template>
  <div class="qrcode">
    <div class="bottom_btn">
        <a class="video" v-on:click="show" href="javascript:;"></a>
    </div>
    <div v-show="is" class="bg" v-on:click="show">
      <div v-on:click.stop id="qrcode"></div>
    </div>
  </div>
</template>

<script>
import QRCode from '../assets/js/qrcode.js'
export default {
  name: 'qrcode',
  // props:['href'],
  data (){
  	return {
      is:false,
      href:''
  	}
  },
  created(){
    this.href = window.location.href;
  },
  mounted () {
      this.makeCode();
  },
  methods:{
  	 show:function(){
        if(this.is){
          this.is = false;
        }else{
          this.is= true;
        }
     },
     makeCode:function(){
      var qrcode = new QRCode('qrcode', {
            render : "canvas",
            height: 200,
            width: 200,
            colorDark: '#123'
        });
      qrcode.makeCode(this.href);
     },
  }
}
</script>

<style scoped>
        .bg{
            position:fixed;
            height:100%;;
            z-index:99;
            width:100%;
            bottom:1rem;
            background:rgba(0,0,0,0.1);
        }
        #qrcode{
          margin:0 auto;
          margin-top:5rem;
        }
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
        .video{
            background:url(../assets/img/erweima.png);
        }
        #qrcode{
          width:200px;
          margin: 0 auto;
          margin-top:5rem;
        }
</style>