<template>
	<div class="sellerwrap">
		<div class="overview">
			<h1 class="title">粥品香坊（回龙观）</h1>
			<div class="desc border-1px">
				<star :score='seller.score'></star>
				<span class="text">({{seller.ratingCount}})</span>
				<span class="text">月售{{seller.sellCount}}单</span>
			</div>
			<div class="remarkwrap">
				<ul class="remark">
					<li class="block">
						<h2>起送价</h2>
						<div class="content">
							<span class="stress">{{seller.minPrice}}</span>
							元
						</div>
					</li>
					<li class="block">
						<h2>商家配送</h2>
						<div class="content">
							<span class="stress">{{seller.deliveryPrice}}</span>
							元
						</div>
					</li>
					<li class="block">
						<h2>平均配送时间</h2>
						<div class="content">
							<span class="stress">{{seller.deliveryTime}}</span>
							分钟
						</div>
					</li>
				</ul>
			</div>
			<div class="favorite" @click='liketogg = !liketogg'>
				<span :class="liketogg?'like':''" class="icon-favorite" ></span>
				<span class="text">收藏</span>
			</div>
		</div>
		<div class="splite"></div>
		<div class="bulletin">
			<h4 class="title">商家公告</h4>
			<div class="contentwrap">
				<div class="content">
					<p>{{seller.bulletin}}</p>
				</div>
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
		<div class="splite"></div>
		<div class="bulletin">
			<h4 class="title">商家信息</h4>
			<div class="fcontent">
				<ul>
					<li v-for="item in seller.infos">
						<span>{{item}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import star from './star.vue';
	import vdata from '../data.js';
	export default{
		created() {
	      this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
	    },
		components:{
			"star":star
		},
		data:function () {
			return{
				seller:vdata.seller,
				ratings:vdata.ratings,
				liketogg:false
			}
		},
		prop:["seller"],

	};


</script>

<style type="text/css">
	.sellerwrap .overview{
		position: relative;
   		padding: 18px;
   		border-top: 1px solid rgba(7,17,27,0.1);
   		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.sellerwrap .overview .title{
		margin-bottom: 8px;
	    line-height: 14px;
	    color: #07111b;
	    font-size: 14px;
	}
	.sellerwrap .overview .desc{
		padding-bottom: 18px;
	}
	.sellerwrap .overview .desc .starwrap {
		display: inline-block;
		padding: 0px;
		position: relative;
		top: 2px;
	}
	.sellerwrap .overview .desc .starwrap .star-item{
		width: 15px;
	    height: 15px;
	    margin: 0px 6px 0px 0px;
	}
	.sellerwrap .overview .desc .text{
		display: inline-block;
	    margin-right: 12px;
	    line-height: 18px;
	    vertical-align: top;
	    font-size: 10px;
	    color: #4d555d;
	}
	.sellerwrap  .overview  .favorite {
		position: absolute;
	    width: 50px;
	    right: 11px;
	    top: 18px;
	    text-align: center;
	}
	.sellerwrap  .overview .favorite .icon-favorite{
		display: block;
	    margin: 0px auto 4px;
	    line-height: 24px;
	    font-size: 24px;
	    color: #d4d6d9;
	    width: 25px;
	    height: 25px;
	    background-image: url(./img/like.png);
		background-size: cover;
	}
	.sellerwrap  .overview .favorite .icon-favorite.like{
		background-image: url(./img/likea.png);
	}
	.sellerwrap  .overview .favorite .text{
		line-height: 10px;
	    font-size: 10px;
	    color: #4d555d;
	}
	.sellerwrap  .overview .remarkwrap{
		border-top: 1px solid rgba(7,17,27,0.1);
	}
	.sellerwrap  .overview .remarkwrap .remark{
		display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    padding-top: 18px;
	}
	.sellerwrap  .overview .remarkwrap .remark .block{
		-webkit-box-flex: 1;
	    -ms-flex: 1;
	    flex: 1;
	    text-align: center;
	    border-right: 1px solid rgba(7,17,27,0.1);
	}
	.sellerwrap  .overview .remarkwrap .remark .block:last-child{
		border:none;
	}
	.sellerwrap  .overview .remarkwrap .remark .block h2{
		margin-bottom: 4px;
	    line-height: 10px;
	    font-size: 10px;
	    color: #93999f;
	}
	.sellerwrap  .overview .remarkwrap .remark .block  .content {
		margin-top: 12px;
	}
	.sellerwrap  .overview .remarkwrap .remark .block  .content .stress{
		font-size: 24px;
	}
	.sellerwrap .splite{
		width: 100%;
	    height: 16px;
	    border-top: 1px solid rgba(7,17,27,0.1);
	    border-bottom: 1px solid rgba(7,17,27,0.1);
	    background: #f3f5f7;
	}
	.sellerwrap .bulletin{
		padding: 18px 18px 0 18px;
	}
	.sellerwrap .bulletin .title{
		margin-bottom: 8px;
	    line-height: 14px;
	    color: #07111b;
	    font-size: 14px;
	}
	.sellerwrap .bulletin .contentwrap .content{
		padding: 0 12px 16px 12px;
		border-bottom: 1px solid rgba(7,17,27,0.1)
	}
	.sellerwrap .bulletin .contentwrap .content p{
		line-height: 24px;
	    font-size: 12px;
	    color: #f01414;
	}
	.sellerwrap .bulletin  .fcontent ul li{
		padding: 14px 12px;
	    position: relative;
	    border-bottom: 1px solid rgba(7,17,27,0.1);
	    /*font-size: 0;*/
	    font-size: 12px;
	}
	.sellerwrap .bulletin  .fcontent ul li .icon {
		display: inline-block;
	    width: 16px;
	    height: 16px;
	    vertical-align: top;
	    margin-right: 6px;
	    background-size: 16px 16px;
	    background-repeat: no-repeat;
	}
	.sellerwrap .bulletin  .fcontent ul li .icon.decrease{
		background-image: url('img/decrease_1@3x.png');
	}
	.sellerwrap .bulletin  .fcontent ul li .icon.decrease{
		background-image: url('img/decrease_1@3x.png');
	}
	.sellerwrap .bulletin  .fcontent ul li .icon.discount{
		background-image: url('img/discount_1@3x.png');
	}
	.sellerwrap .bulletin  .fcontent ul li .icon.guarantee{
		background-image: url('img/guarantee_1@3x.png');
	}
	.sellerwrap .bulletin  .fcontent ul li .icon.invoice{
		background-image: url('img/invoice_1@3x.png');
	}
	.sellerwrap .bulletin  .fcontent ul li .icon.special{
		background-image: url('img/special_1@3x.png');
	}
</style>