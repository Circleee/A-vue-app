<template>	
	<div class="starwrap">
		<div class="star-item"  v-for="item in star" :class="star[$index]"></div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:["seller"],
		data:function () {
			return {
				AA:this.seller.score
			}
		},
		computed:{
			star:function () {
				var result = [];
				var astar = Math.floor(this.AA*2)/2;
				var istar = Math.floor(astar)
				for (var i = 0; i < istar; i++) {
					result.push('on');
				}
				if(astar%1 !=0){
					result.push('half')
				}
				return result
			},
		}
	}

</script>

<style type="text/css">
	.starwrap{
		text-align: center;
		padding:  30px 0px; 
	}
	.star-item{
		width: 24px;
		height: 24px;
		margin: 0px 4px;
		display: inline-block;
		background-size: contain;
    	background-repeat: no-repeat;
		background-image: url(./img/star48_off@3x.png);
	}
	.on{
		background-image: url(./img/star48_on@3x.png);
	}
	.half{
		background-image: url(./img/star48_half@3x.png);
	}


</style>