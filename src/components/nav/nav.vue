<template>
	<div class="header">
		<div class="logo">
			<router-link to="/">赵海鹏官网</router-link>
		</div>
		<ul class="nav">
			<li class="item">
				<router-link to="/index">首页</router-link>
			</li>
			<li class="item">
				<router-link to="/hello">Hello</router-link>
			</li>
			<li class="item">
				<router-link to="/compts">组件库</router-link>
			</li>
			<li class="item">
				<router-link to="/about">关于</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {}
</script>

<style lang="less" scoped>
	a,
	a:link,
	a:active,
	a:hover,
	a:visited {
		color: #333;
		text-decoration: none;
	}
	
	.header {
		box-shadow: 0 0 1px rgba(0, 0, 0, 0.25);
		transition: background-color 0.3s ease-in-out;
		background-color: #fff;
		padding: 10px 60px;
		color: #333;
		box-sizing: border-box;
		.logo {
			display: inline-block;
			font-size: 1.5rem;
			line-height: 40px;
			color: #2c3e50;
		}
		.nav {
			position: absolute;
			right: 60px;
			top: 0;
			height: 40px;
			line-height: 40px;
			.item {
				display: inline-block;
				font-size: 16px;
				padding: 0 20px;
				a {
					padding-bottom: 5px;
					&:hover {
						border-bottom: 3px solid #42b983;
					}
				}
				.router-link-active {
					border-bottom: 3px solid #42b983;
				}
			}
		}
	}
</style>