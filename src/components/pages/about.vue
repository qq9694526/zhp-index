<template>
	<div class="about">
		<section class="section">
			<h1>简介</h1>
			<p>一名
				<b>成熟、丰满、有理想</b>的web前端攻城狮。前端攻城5年，精通Javascript、Vue、Node、Solidity、小程序等。一直致力于Web技术的研究，擅长前端自动化、工程化，在前端跨栈进阶到 Node.js 开发的编程道路上颇有心得。智能合约开发践行者。</p>
			<!--<p>座右铭：拥抱最新前端技术，打造极致用户体验。</p>-->
		</section>
		<section class="section">
			<h1>技术栈</h1>
			<p>基础：html5,css3,ES6,solidity,小程序</br>
				预编译：less,scss</br>
				UI框架：bootStrap,MUI,ElementUI,iView</br>
				JS库：jQuery,requireJs,Swiper</br>
				JS框架：Angular,React,Vue</br>
				node后端：koa,egg,sequelize,mysql</br> 
				前端工程化：git,npm,webpack,gulp
			</p>
		</section>
		<section class="section">
			<h1>项目</h1>
			<p>所有开放源代码都可以在
				<a href="https://github.com/qq9694526">GitHub</a>
				上找到。</br>
				如果对你有所帮助，记得star。</p>
		</section>
		<section class="section">
			<h1>联系</h1>
			<p>
				<a target="_blank" href="http://wpa.qq.com/msgrd?v=3&uin=9694526&site=qq&menu=yes"><img border="0" src="http://wpa.qq.com/pa?p=2:9694526:51" alt="点击这里给我发消息" title="点击这里给我发消息" /></a>
			</p>
			<p>
				<a target="_blank" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=7dTb1NnY39utnJzDjoKA" style="text-decoration:none;"><img src="http://rescdn.qqmail.com/zh_CN/htmledition/images/function/qm_open/ico_mailme_01.png" /></a>
			</p>
		</section>
		<section class="section section-flex">
			<div class="left">
				<h1>捐赠与赞赏</h1>
				<p>你可以通过支付宝，捐赠或者赞赏我。</p>
				<p>支持24小时无理由退款。</p>
			</div>
			<div class="right">
				<img class="codeimg" src="../../assets/img/zhifucode.jpg" />
			</div>
		</section>
	</div>
</template>
<script>
export default {};
</script>

<style lang="less" scoped>
.section-flex {
  display: flex;
  .left {
    flex: 0 0 50%;
    margin-top: 10%;
  }
  .right {
    flex: 0 0 50%;
  }
}

.codeimg {
  display: block;
  width: 50%;
  margin: 0 auto;
}

@media (max-width: 767px) {
  .section-flex {
    display: block;
  }
}
</style>