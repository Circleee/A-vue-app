<template>
	<div class="headerwrap">
		<div class="header">
			<div class="avatar">
				<img  width="64" height="64" src="./img/logo.jpg"></div>
			<div class="title">
				<div class="brand">
					<span>{{seller.name}}</span>
				</div>
				<div class="deli">
					<span>{{seller.description}}</span>
					/
					<span>{{seller.deliveryTime}}送达</span>
				</div>
				<div class="acti" @click = 'showacti =!showacti'>
					<span class="icon" :class="classMap[1]"></span>
					<span>{{seller.supports[0].description}}</span>
				</div>
				<div class="actinum" @click = 'showacti =!showacti'>{{acnum}}个</div>
			</div>
		</div>
		<div class="news" @click = 'showacti =!showacti'>
			<p><span class="bullicon"></span>{{seller.bulletin}}</p>
		</div>
		<div class="background">
		    <img width="256%" height="256%" src="./img/logo.jpg">
		 </div>
	</div>
	<div class="showacti"  v-show="showacti" transition = 'anim'>
		<div class="saheader">
			<h4>{{seller.name}}</h4>
			<!-- <div class="star"></div> -->
			<star :seller='seller'></star>
		</div>
		<div class="favorable">
			<div class="title">
				<div class="line"></div>
				<div class="content">优惠信息</div>
				<div class="line"></div>
			</div>
			<div class="fcontent">
				<ul>
					<li v-for="item in seller.supports">
						<span class="icon" :class="classMap[seller.supports[$index].type]"></span>
						<span>{{item.description}}</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="notice">
			<div class="title">
				<div class="line"></div>
				<div class="content">商家公告</div>
				<div class="line"></div>
			</div>
			<p class="ncont">{{seller.bulletin}}</p>
		</div>
		<div class="dele"  @click="showacti =!showacti">x</div>
	</div>

</template>

<script>
import star from './star.vue';
export default{
	components:{
		"star":star
	},
	data:function () {
		return {
			showacti:false,
			acnum:this.seller.supports.length
		}
	},
	created() {
      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
    },
	props:["seller"]
}
</script>

<style  type="text/css">
	.headerwrap{
		position: relative;
		overflow: hidden;
		background: rgba(7,17,27,0.5);
	}
	.headerwrap .background{
		position: absolute;
	    top: 0;
	    left: 0;
	    width: 100%;
	    height: 100%;
	    z-index: -1;
	    -webkit-filter: blur(10px);
	    filter: blur(10px);
	}
	.headerwrap .header{
		padding: 24px 12px 18px 24px;
		/*background: red;*/
	}
	.headerwrap .header .avatar{
		float: left;
	}
	.headerwrap .header .title{
		margin-left: 82px;
		height: 64px;
		/*background: #cf0*/
	}
	.headerwrap .header .title .brand{
		margin: 2px 0px 8px;
	}
	.headerwrap .header .title .brand span{
		font-size: 16px;
		line-height: 16px;
		font-weight: bold;
		color: #fff;
	}
	.headerwrap .header .title .deli {
		margin-bottom: 10px;
		font-size: 12px;
		line-height: 12px;
		font-weight: 200;
		color: #fff;
	}
	.headerwrap .header .title .acti{
		line-height: 16px;
		font-size: 10px;
		color: #fff;
	}
	.headerwrap .header .title .acti span.icon{
		display: inline-block;
		width: 16px;
		height: 16px;
		vertical-align: top;
		background-size: 100% 100%;
		margin-right: 6px;
		background-image: url('img/decrease_1@3x.png');
	}
	.headerwrap .header .title .acti span.icon.decrease{
		background-image: url('img/decrease_1@3x.png');
	}
	.headerwrap .header .title .acti span.icon.discount{
		background-image: url('img/discount_1@3x.png');
	}
	.headerwrap .header .title .acti span.icon.guarantee{
		background-image: url('img/guarantee_1@3x.png');
	}
	.headerwrap .header .title .acti span.icon.invoice{
		background-image: url('img/invoice_1@3x.png');
	}
	.headerwrap .header .title .acti span.icon.special{
		background-image: url('img/special_1@3x.png');
	}
	.headerwrap .header .title {
		position: relative;
	}
	.headerwrap .header .title .actinum{
		position: absolute;
		height: 24px;
		line-height: 24px;
		background: #808080;
		padding: 0px 8px;
		color: #fff;
		border-radius: 8px;
		bottom: 0px;
		right: 0px;
	}
	.headerwrap .news{

		height:28px;
		overflow:hidden;
		background: rgba(1,17,27,0.2);
	}
	.headerwrap .news p{
		line-height: 28px;
		font-size: 12px;
		margin: 0px 12px;
		color: #fff;
		font-weight: 200
	}
	.headerwrap .news .bullicon{
		width: 22px;
		height: 12px;
		display: inline-block;
		background-image: url(./img/bulletin@3x.png);
		background-size: 22px 12px;
		margin-right: 10px;
		position: relative;
		top: 1px;
	}
	.showacti{
		background: rgba(7,17,27,0.8);
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0px;
	}
	.anim-transition{
		transition: all 0.5s ease;
	}
	.anim-enter{
		opacity: 0;
		transform: translateY(-400px) scale(0);
	}
	.anim-leave{
		opacity: 0;
		transform: translateY(-400px) scale(0);
	}
	.showacti{
		color: #fff;
	}
	.showacti .notice,.showacti .favorable{
		width: 80%;
		margin: 0px auto;
	}
	.showacti .favorable .fcontent{
		margin: 24px 12px;
	}
	.showacti .favorable .fcontent li{
		font-size: 12px;
		line-height: 12px;
		margin-bottom: 12px;
	}
	.showacti .favorable .fcontent li span.icon{
		display: inline-block;
		width: 16px;
		height: 16px;
		vertical-align: top;
		background-size: 100% 100%;
		margin-right: 6px;
		background-image: url('img/decrease_1@3x.png');
	}
	.showacti .favorable .fcontent li span.icon.decrease{
		background-image: url('img/decrease_1@3x.png');
	}
	.showacti .favorable .fcontent li span.icon.discount{
		background-image: url('img/discount_1@3x.png');
	}
	.showacti .favorable .fcontent li span.icon.guarantee{
		background-image: url('img/guarantee_1@3x.png');
	}
	.showacti .favorable .fcontent li span.icon.invoice{
		background-image: url('img/invoice_1@3x.png');
	}
	.showacti .favorable .fcontent li span.icon.special{
		background-image: url('img/special_1@3x.png');
	}
	.showacti .saheader{
		padding-top: 64px;
	}
	.showacti .saheader h4{
		font-size: 16px;
		font-weight: 700;
		line-height: 16px;
		text-align: center;
	}
	.showacti .saheader .star{
		padding: 18px 0px 28px;
	}
	.showacti  .title{
		display: flex;
		margin: 0px auto;
	}

	.showacti  .title .content{
		padding: 0px 15px;
		font-size: 14px;
		line-height: 14px;
		font-weight: 700px;
	}
	.showacti  .title .line{
		flex: 1;
	    position: relative;
	    top: -6px;
	    border-bottom: 1px solid hsla(0,0%,100%,.2);
	    position: relative;
	    top: -7px;
	}
	.showacti .notice p.ncont{
		margin: 24px 12px 0px;
		font-size: 12px;
		line-height: 24px;
		font-weight: 200
	}
	.showacti  .dele{
		font-size: 32px;
		position: absolute;
		bottom: 32px;
		left: 50%;
		margin-left: -10.3px;
	}
</style>