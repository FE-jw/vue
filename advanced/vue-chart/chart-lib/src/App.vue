<template>
	<div>
		<h1>Chart.js</h1>
		<bar-chart :propsdata="chartDataSet"></bar-chart>
		<line-chart></line-chart>
	</div>
</template>

<script>
import axios from 'axios';
import BarChart from '@/components/BarChart.vue';
import LineChart from '@/components/LineChart.vue';

export default {
	data(){
		return {
			chartDataSet: [{
				label: '# of Votes',
				data: [12, 19, 3, 5, 2, 3],
				borderWidth: 1
			}]
		}
	},
	created(){
		axios.get('charts/line/1')
			.then(res => this.chartDataSet = res.data)
			.catch(err => console.log(err));
	},
	components: {
		BarChart,
		LineChart
	}
}
</script>

<style lang="scss" scoped>

</style>