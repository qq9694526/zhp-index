<template>
	<div class="index">
		<section class="section">
			<h1>初衷</h1>
			<p>作为一个面向未来的web前端工程师，最痛苦的事莫过于不能<b>学以致用</b>。而使用webpack+vue全家桶构建的本站，可以让自己很好的应用ES6、vue等最前沿前端技术，达到学以致用的目的。</p>
		</section>
		<section class="section section-flex">
			<div class="left">
				<h1>在路上</h1>
				<p class="hidden-xs">近一年开发项目&nbsp;&nbsp;&nbsp;---></p>
				<p class="hidden-xs">微信扫码,获取更佳浏览体验</p>
				<p class="visible-xs">长按二维码查看近一年开发项目</p>
				<p>
					<img class="codeimg" src="../../assets/img/workerscode.png" />
					<small>ps:感谢侯晓利同学友情提供的UI</small>
				</p>
			</div>
			<div class="right hidden-xs">
				<v-iphone></v-iphone>
			</div>
		</section>
		<section class="section">
			<h1>计划</h1>
			<p>1、学习node,成为一名全栈工程师；</p>
			<p>2、倾尽一生的去开发维护一个开源项目。</p>
		</section>
		<section class="section">
			<h1>梦想</h1>
			<p>阅读和写作。这么说可能略显单薄，特意配了张图。</p>
			<div class="well">
				<p>书橱、落地窗、躺椅、《你一生的故事》，嗯，最好再配一抹斜阳，这大概就是我向往的生活。</p>
				<p class="text-right"><small>---这就是图，请用心感受</small></p>
			</div>
		</section>
	</div>
</template>
<script>
	import vIphone from '../iphone/iphone'
	export default {
		components: {
			vIphone
		}
	}
</script>

<style lang="less" scoped>
	.section-flex {
		display: flex;
		.left {
			display: flex;
			flex: 1;
			flex-direction: column;
			justify-content: center;
			.codeimg{
				width: 35%;
				vertical-align: text-bottom;
			}
		}
		.right {
			flex: 0;
		}
	}
	
	@media (max-width:767px){
		.section-flex .left .codeimg{
			display: block;
			width: 50%;
			margin: 10px auto;
		}
	}
	
</style>