<template>
	<div class="headerwrap">
		<div class="header">
			<div class="avatar">
				<img  width="64" height="64"></div>
			<div class="title">
				<div class="brand">
					<span>{{seller.name}}</span>
				</div>
				<div class="deli">
					<span>{{seller.description}}</span>/
					<span>{{seller.deliveryTime}}送达</span>
				</div>
				<div class="acti"></div>
			</div>
		</div>
		<div class="news"></div>
	</div>
</template>

<script>
export default{
	data:function () {
		return {
			zz:'zzzzz'
		}
	},
	props:["seller"]
}
</script>

<style>
	.headerwrap .header{
		margin: 24px 12px 18px 24px;
		background: red;
	}
	.headerwrap .header .avatar{
		float: left;
	}
	.headerwrap .header .title{
		margin-left: 82px;
		height: 64px;
		background: #cf0
	}
</style>