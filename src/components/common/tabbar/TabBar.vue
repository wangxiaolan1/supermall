<template>
	<div id="tab-bar">
		<slot></slot>
    </div>
</template>

<script>
export default {
  name: 'TabBar',
  components: {

  }
}
</script>

<style>
	#tab-bar{
		height:49px;
		width:100%;
		display:flex;
		position:fixed;
		bottom:0;
		left:0;
		background-color:#f6f6f6;
		box-shadow: 0 -1px 5px rgba(0,0,0, .2);
		z-index:5;
	}
</style>