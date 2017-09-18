<template>
 	<div class="bottom">
 		<div style="height:1.5rem;"></div>
	    <div class="bottom_fixed">
	        <fen-xiang></fen-xiang>
	        <qrcode></qrcode>
	        <div class="bottom_btn">
	            <a class="anli" href="javascript:;"></a>
	        </div>
	    </div>
 	</div>
</template>

<script>
import FenXiang from './FenXiang'
import Qrcode from './Qrcode'
export default {
  name: 'bottom',
  components: {
    FenXiang,Qrcode
  },
  data (){
  	return {
  		href:''
  	}
  },
  mounted () {
  	
  },
  methods:{

  }
}
</script>

<style scoped>
  	/*底部菜单*/
        .bottom_fixed{
            position:fixed;
            width:100%;
            height:0.98rem;
            bottom:0rem;
            left:0rem;
            background:yellowgreen;
            border-top:0.02rem solid #e6e6e6;
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
        .anli{
            background:url(../assets/img/fankui.png);
        }
</style>