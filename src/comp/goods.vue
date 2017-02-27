<template>
	<div class="goodswrap">
		<div class="menu" v-el:menu>
			<ul>
				<li v-for='item in goods' @click='helllo'>
					<span>{{item.name}}</span>
				</li>
			</ul>
		</div>
		<div class="goods" v-el:foods id="cc">
			<ul class="foodlist">
				<ul v-for="item in goods">
					<h4>{{item.name}}</h4>
					<li v-for='itemit in goods[$index].foods'>
						<div class="foodicon">
							<img  width="57" height="57" :src="itemit.icon"></div>
						<div class="content">
							<h4>{{itemit.name}}</h4>
							<p>
								<span class="cont">月售{{itemit.sellCount}}份</span>
								<span>好评率{{itemit.rating}}</span>
							</p>
							<p><span class="price">{{itemit.price|currency '¥'}}</span><span class="old">{{itemit.oldPrice|currency '¥'}}</span></p>
						</div>
					</li>
				</ul>
			</ul>
		</div>
		<div class="shopcart"></div>
	</div>
</template>

<script type="text/javascript">
	import vdata from '../data.js';
	import bscroll from 'better-scroll';
	export default{
		compiled() {
	     	console.log('ch');
	    	this._initscroll
	    },
		data:function () {
			return {
				goods:vdata.goods
			}
		},
		methods:{
			_initscroll:function(){
				this.foodsScroll  =  new bscroll(document.getElementById('cc'),{});
				this.menuScroll = new bscroll(this.$els.menu,{})
			},
			helllo:function(){
				console.log('cc')
			}
		}
	};
</script>

<style type="text/css">
	.goodswrap{
		position: absolute;
		top: 176px;
		bottom: 46px;
		width: 100%;
		display: flex;
		overflow: hidden;
	}
	.goodswrap .menu{
		flex: 0 0 80px;
		background: #F3F5F7;
		overflow: auto;
	}
	.goodswrap .menu ul {
		width: 80px;
	}
	.goodswrap .menu ul li{
		padding: 0px 12px;
		height: 54px;
		display: table;		
	}
	.goodswrap .menu ul li.active{
		background: #fff;
	}
	.goodswrap .menu ul li span{
		width: 56px;
		font-size: 12px;
		font-weight: 200;
		line-height: 14px;
		display: table-cell;
		vertical-align: middle;
		border-bottom: 1px solid rgba(7,17,27,0.1);
	}
	.goodswrap .goods{
		flex: 1;
		overflow: auto;
	}
	.goodswrap .goods .foodlist ul>h4{
		line-height: 26px;
		background: #f3f5f7;
		border-left: 1px solid #d9dde1;
		font-size: 12px;
		padding-left: 28px;
		color: rgb(147,153,159);
	}
	.goodswrap .goods .foodlist ul li {
		display: flex;
		margin: 18px;
		padding-bottom: 18px;
		border-bottom: 1px solid  rgba(7,17,27,0.1)
	}
	.goodswrap .goods .foodlist ul li:last-child{
		padding-bottom: 0px;
		border-bottom: none;
	}
	.goodswrap .goods .foodlist ul li .foodicon{
		flex: 0 0 57px;
		margin-right: 10px;
	}
	.goodswrap .goods .foodlist ul li .content{
		flex: 1;
	}
	.goodswrap .goods .foodlist ul li .content h4{
		font-size: 14px;
		color: rgb(7,17,27);
		line-height: 18px;
		margin-bottom: 5px;
	}
	.goodswrap .goods .foodlist ul li .content p{
		font-size: 10px;
		line-height: 10px;
		color: rgb(147,153,159);
	}
	.goodswrap .goods .foodlist ul li .content p .cont{
		display: inline-block;
		margin-right: 15px;
	}
	.goodswrap .goods .foodlist ul li .content p:last-child{
		line-height: 24px;
	}
	.goodswrap .goods .foodlist ul li .content p .price{
		margin-right: 8px;
	    font-size: 14px;
	    color: #f01414;
	}
	.goodswrap .goods .foodlist ul li .content p .oldprice{
		text-decoration: line-through;
	    font-size: 10px;
	    color: #93999f;
	}
</style>