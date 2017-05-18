<template>
	<div class="header">
		<div class="logo">
			<router-link to="/">赵海鹏官网</router-link>
		</div>
		<ul class="collapse-btn" @click="toggleCollapsed" v-if="isPhoneSize">
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<ul class="nav" v-show="!isPhoneSize||!collapsed" @click="toggleCollapsed">
			<li class="item">
				<router-link to="/index">首页</router-link>
			</li>
			<li class="item">
				<router-link to="/compts">组件库</router-link>
			</li>
			<li class="item">
				<router-link to="/blog">博客</router-link>
			</li>
			<li class="item">
				<router-link to="/about">关于</router-link>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				isPhoneSize: false,
				collapsed: true
			}
		},
		created() {
			this.isPhoneSize=document.body.clientWidth<=768;
		},
		methods: {
			toggleCollapsed() {
				this.collapsed = !this.collapsed;
			}
		}
	}
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
	
	.collapse-btn {
		position: absolute;
		top: 18px;
		right: 20px;
		width: 25px;
		>li {
			width: 100%;
			height: 3px;
			margin-bottom: 5px;
			background-color: #333;
		}
	}
	
	.header {
		position: fixed;
		width: 100%;
		top: 0;
		z-index: 100;
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
				padding: 10px 20px;
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
	
	@media (max-width: 767px) {
		.header {
			padding: 10px 20px;
			.logo {
				font-size: 1.2rem;
			}
			.nav {
				position: absolute;
				right: 0;
				top: 61px;
				width: 100%;
				text-align: center;
				.item {
					display: block;
					font-size: 1rem;
					padding: 10px 20px;
					background-color: #fff;
				}
			}
		}
	}
</style>