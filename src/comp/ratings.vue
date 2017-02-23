<template>
	<div class="ratingwrap">
		<div class="ratingsmain">
			<div class="left">
				<p class="score">{{seller.foodScore}}</p>
				<p class="scoredecs">综合评分</p>
				<p class="cont">高于周边的商家{{seller.rankRate}}%</p>
			</div>
			<div class="right">
				<div class="li">
					<span>服务态度</span>
					<star :score= '4.5'></star>
					<span class="gra">4.5</span>
				</div>
				<div class="li">
					<span>商品评分</span>
					<star :score='3.7'></star>
					<span class="gra">3.7</span>
				</div>
				<div class="li">
					<span>送达时间</span>
					<span class="gary">{{seller.deliveryTime}}分钟</span>
				</div>
			</div>
		</div>
		<div class="ratingsplit"></div>
		<div class="ratingslist">
			<div class="ratitag">
				<span class="tag active">全部</span>
				<span class="tag">满意</span>
				<span class="tag bad">不满意</span>
			</div>
			<div class="ratiul">
				<ul>
					<li v-for='item in ratings'>
						<div class="avatar">
							<img width="28" height="28" :src='item.avatar'></div>
						<div class="content">
							<h1 class="name">{{item.username}}</h1>
							<div class="star-wrapper">
								<star :score="item.score" ></star>
								<!-- <span class="delivery" >dasds</span> -->
							</div>
							<p class="text">{{item.text}}</p>
							<div class="recommend">
								<span class="icon-thumb_up"></span>
								 <span class="item" v-for="item in item.recommend">{{item}}</span>
							</div>
							<div class="time">{{item.rateTime}}</div>
						</div>
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

		components:{
			"star":star
		},
		data:function () {
			return{
				seller:vdata.seller,
				ratings:vdata.ratings
			}
		},
		prop:["seller"],
	}
</script>
<style type="text/css">
	.ratingwrap{
		position: absolute;
		top: 176px;
		bottom: 0px;
		left: 0px;
		width: 100%;
	}
	.ratingwrap .ratingsmain{
		padding: 18px 0px;
		display: flex;
		border:1px solid #E6E7E8;
		border-right: none;
		border-left: none;
	}
	.ratingwrap .ratingsmain .left{
		flex: 0 0 137px;
		border-right: 1px solid rgba(7,17,27,0.1);
	}
	.ratingwrap .ratingsmain .left>p{
		text-align: center;
	}
	.ratingwrap .ratingsmain .left>p.score{
		font-size: 24px;
		color: rgb(255,159,0);
		line-height: 28px;
	}
	.ratingwrap .ratingsmain .left>p.scoredecs{
		font-size: 12px;
		color: rgb(7,17,27);
		margin: 6px 0px 8px;
		line-height: 18px;
	}
	.ratingwrap .ratingsmain .left>p.cont{
		font-size: 10px;
		color: rgb(147,153,159);
		line-height: 10px;
	}

	.ratingwrap .ratingsmain .right{
		flex: 1;
		margin-left: 12px;
	}
	.ratingwrap .ratingsmain .right .li{
		font-size: 12px;
		line-height: 18px;
		color: rgb(7,17,27);
		line-height: 18px;
		margin-bottom: 8px;
	}
	.ratingwrap .ratingsmain .right .li .gra{
		color: rgb(255,153,0);
	}
	.ratingwrap .ratingsmain .right .li .gary{
		color: rgb(147,153,159)
	}
	.ratingwrap  .starwrap{
		padding: 0px;
		margin: 0px;
		display: inline-block;
		vertical-align: bottom;
	}
	.ratingwrap  .starwrap .star-item{
		width: 15px;
		height: 15px;
		margin: 0px 6px 0px 0px;
		line-height: 18px;
	}
	.ratingwrap .ratingsplit{
		width: 100%;
	    height: 16px;
	    border-top: 1px solid rgba(7,17,27,0.1);
	    border-bottom: 1px solid rgba(7,17,27,0.1);
	    background: #f3f5f7;
	}
	.ratingwrap .ratingslist .ratitag{
		padding: 18px 0;
	    margin: 0 18px;
	    position: relative;
	}
	.ratingwrap .ratingslist .ratitag .tag{
		display: inline-block;
	    padding: 8px 12px;
	    margin-right: 8px;
	    line-height: 16px;
	    border-radius: 1px;
	    font-size: 12px;
	    color: #4d555d;
	}
	.ratingwrap .ratingslist .ratitag .tag{
		background: rgba(0,160,220,0.2);
	}
	.ratingwrap .ratingslist .ratitag .tag.active{
		background: #00a0dc;
		color: #fff;
	}
	.ratingwrap .ratingslist .ratitag .tag.bad{
		background: rgba(77,85,93,0.2);
	}
	.ratingwrap .ratingslist  .ratiul{
		padding: 0px 18px;
	}
	.ratingwrap .ratingslist  .ratiul ul li{
		display: -webkit-box;
	    display: -ms-flexbox;
	    display: flex;
	    padding-top: 18px;
	    position: relative;
	}
	.ratingwrap .ratingslist  .ratiul ul li .avatar{
		flex: 0 0 28px;
	    width: 28px;
	    margin-right: 12px;
	}
	.ratingwrap .ratingslist  .ratiul ul li .content{
		position: relative;
	    flex: 1;
	}
	.ratingwrap .ratingslist  .ratiul ul li .content .name{
		margin-bottom: 4px;
	    line-height: 12px;
	    font-size: 10px;
	    color: #07111b;
	}
	.ratingwrap .ratingslist  .ratiul ul li .content .starwrap .star-item{
		width: 10px;
		height: 10px;
		margin: 0px 2px 0px 0px;
		line-height: 18px;
	}
	.ratingwrap .ratingslist  .ratiul ul li .content .text{
	    margin-bottom: 8px;
	    line-height: 18px;
	    color: #07111b;
	    font-size: 12px;
	    /*color: red*/
	}
	.ratingwrap .ratingslist  .ratiul ul li .content .time{
		position: absolute;
	    top: 0;
	    right: 0;
	    line-height: 12px;
	    font-size: 10px;
	    color: #93999f;
	}
	.ratingwrap .ratingslist  .ratiul ul li .content .recommend .item {
		padding: 0 6px;
	    border: 1px solid rgba(7,17,27,0.1);
	    border-radius: 1px;
	    color: #93999f;
	    background: #fff;
	    display: inline-block;
	    margin: 0 8px 4px 0;
	    font-size: 9px;
	}
</style>