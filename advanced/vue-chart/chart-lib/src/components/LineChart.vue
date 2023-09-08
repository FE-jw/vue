<template>
	<canvas ref="lineChart"></canvas>
</template>

<script>
export default {
	mounted(){
		new this.$_Chart(this.$refs.lineChart.getContext('2d'), {
			type: 'line',
			data: {
				label: ['1월', '2월', '3월', '4월', '5월', '6월'],
				datasets: [{
					backgroundColor: 'rgb(255, 99, 132)',
					data: [1000, 10, 20, 10, 50, 200]
				}]
			}
		});
	}
}
</script>

<style lang="scss" scoped>

</style>