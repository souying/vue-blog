<template>
  	<div class="loading">
  		<div class="fl Loading44"></div>
  	</div>
</template>

<script>
export default {
  name: 'loading',
  data(){
  	return {
  		is:true
  	}
  },
  mounted(){
  	// setTimeout(function(){
  	// 	console.log(this.is)
  	// 	this.is = false;
  	// 	console.log(this.is)
  	// },1200);
  },
}
</script>

<style scoped>
  .loading{
  	/*display:none;*/
  	position:fixed;
  	width:100%;
  	height:100%;
  	top:0;
  	left:0;
  	background:#ff8800;
  	z-index:999;
  }
  .fl{
  	margin:0 auto;
  	margin-top:6rem;
  }
  .Loading44 {
	  width: 30px;
	  height: 30px;
	  background-color: #fff;
	  -webkit-animation: rotateplane 1.2s infinite ease-in-out;
	  animation: rotateplane 1.2s infinite ease-in-out;
	}

	@-webkit-keyframes rotateplane {
	  0% { -webkit-transform: perspective(120px) }
	  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
	  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
	}

	@keyframes rotateplane {
	  0% { 
	    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
	    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
	  } 50% { 
	    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
	    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
	  } 100% { 
	    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
	  }
	}
</style>
