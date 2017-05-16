<template>
	<div id="app">
		<iphone></iphone>
		<router-view></router-view>
	</div>
</template>

<script>
	import iphone from './components/iphone/iphone'
	export default {
		name: 'app',
		components: {
			iphone
		}
	}
</script>

<style lang="less">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		margin-top: 60px;
		img {
			border-radius: 50%;
		}
	}
</style>