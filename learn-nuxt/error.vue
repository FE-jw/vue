<template>
	<div>
		<h1>Error Page</h1>
		<table>
			<tbody>
				<tr>
					<th scope="row">url</th>
					<td>{{ error.url }}</td>
				</tr>
				<tr>
					<th scope="row">statusCode</th>
					<td>{{ error.statusCode }}</td>
				</tr>
				<tr>
					<th scope="row">statusMessage</th>
					<td>{{ error.statusMessage }}</td>
				</tr>
				<tr>
					<th scope="row">message</th>
					<td>{{ error.message }}</td>
				</tr>
				<tr>
					<th scope="row">stack</th>
					<td>{{ error.stack }}</td>
				</tr>
			</tbody>
		</table>		
	</div>
</template>

<script setup>
const error = useError();
console.log(error);
</script>

<style lang="scss" scoped>
	$error: #d33;
	h1	{color:$error;}
	table	{border-collapse:collapse;text-align:left;
		@mixin common	{padding:0.5rem;border:1px solid #000;}
		th,
		td	{@include common;}
	}
</style>