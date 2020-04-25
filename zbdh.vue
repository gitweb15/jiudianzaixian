<template>
	<div class="boy1">
		<h4>会员管理</h4>
		<ul>
			<li>会员列表</li>
			<li>充值设置</li>
			<li>积分设置</li>
			<li>充值记录</li>
			<li>消费记录</li>
		</ul>
		<h4>优惠劵</h4>
		<ul>
			<li>优惠劵管理</li>
		</ul>
		<h4>商品管理</h4>
		<ul>
			<li>商品列表</li>
			<li>商品分类</li>
		</ul>
		<h4>订单管理</h4>
		<ul>
			<li>商品订单</li>
			<li>客房订单</li>
			<li>住宿记录</li>
		</ul>
		<h4>客房管理</h4>
		<ul>
			<li>房态管理</li>
			<li>房型管理</li>
			<li>房号管理</li>
		</ul>
		<h4>投诉建议管理</h4>
		<ul>
			<li>投诉建议</li>
		</ul>
		<h4>用户管理</h4>
		<ul>
			<li>管理员列表</li>
			<li>角色管理</li>
		</ul>
		<h4>设置</h4>
		<ul>
			<li>微信设置</li>
			<li>酒店设置</li>
			<li>其他设置</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: "zbdh"
	}
</script>

<style>
	.boy1 {
		font-size: 14px;
		margin-top: -14px;
	}

	.boy1 h4 {
		color: #c3bdb6;
	}

	.boy1 ul {
		margin-left: -20px;
	}

	.boy1 ul li {
		list-style: none;
		margin-left: -25px;
		width: 120px;
		text-align: center;
		height: 30px;
		line-height: 30px;
		cursor: pointer;
	}

	.boy1 ul li:hover {
		color: #ee903c;
		border-radius: 20px;
		background-color: #FFF8E8;
	}
</style>
