<template>
	<canvas ref="barChart"></canvas>
</template>

<script>
export default {
	props: ['propsdata'],
	mounted(){
		new this.$_Chart(this.$refs.barChart, {
			type: 'bar',
			data: {
				labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
				datasets: this.propsdata
			},
			options: {
				scales: {
					y: {
						beginAtZero: true
					}
				}
			}
		});
	}
}
</script>

<style lang="scss" scoped>

</style>