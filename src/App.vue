<template>
	<div class="app-wrapper">
		<div id="app">
			<v-nav></v-nav>
			<router-view></router-view>
		</div>
		<div class="footer-wrapper">
			<v-footer></v-footer>
		</div>
	</div>
</template>

<script>
	import './assets/css/reset.css'
	import './assets/css/common.less'
	import vNav from './components/nav/nav'
	import vFooter from './components/footer/footer'
	export default {
		name: 'app',
		components: {
			vNav,
			vFooter
		}
	}
</script>

<style lang="less">
	/*粘连footer*/
	html,
	body ,.app-wrapper{
		height: 100%;
	}
	.footer-wrapper {
		height: 80px;
		margin-top: -80px;
	}
	#app {
		font-family: '微软雅黑', 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #333;
		padding-top: 60px;
		box-sizing: border-box;
		min-height: 100%;
		padding-bottom: 80px;
	}
</style>