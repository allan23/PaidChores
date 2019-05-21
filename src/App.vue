<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style lang="scss">
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		padding: 10px 0 100px 0;
		background: #00334E;
		color: #ffffff;
	}

	.full-width {
		width: 100%;
	}

	.sidebar {

		.add-form {
			color: #000000;
			margin: 10px;
			background: #e8e8e8;
			padding: 10px;
		}
	}

	.task-list {

		color: #000000;

		.task {
			background:#e8e8e8;
			border:1px solid #e8e8e8;
			margin: 10px;
			h5 {
				background: #5588a3;
				color: #ffffff;
				padding:10px;
				.task-amount {
					color:green;
					background:#ffffff;
					padding:2px;
				}
			}
			.description {
				padding:10px;
			}
		}
	}

</style>
