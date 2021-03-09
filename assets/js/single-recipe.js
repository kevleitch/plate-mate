Vue.component('singlerecipe', {
	props: ['results'],
	template: `
		<section>
			<div class="" v-for="result in results">
				<div class="card">
					<div class="card-text">
						<div id="recipethumb">
							Test
						</div>
						<div id="recipedetails">
							Test
						</div>
					</div>
				</div>
			</div>
		</section>
	`
})

const sr = new Vue({
	el: '#singlerecipe-app',
	data: {
		results: [],
		recipeid: ''
	},
	methods: {
		getrecipe:function() {
			axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+this.recipeid)
			.then(response => {
				this.results = response.data.meals;
				console.log(response);
			})
		}
	}
});