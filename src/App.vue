<template>
	<div id="app">
		<v-nav></v-nav>
		<router-view></router-view>
	</div>
</template>

<script>
	import './assets/css/reset.css'
	import vIphone from './components/iphone/iphone'
	import vNav from './components/nav/nav'
	export default {
		name: 'app',
		components: {
			vNav,
			vIphone
		}
	}
</script>

<style lang="less">
	#app {
		font-family: '微软雅黑','Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #333;
		padding-top: 60px;
	}
</style>