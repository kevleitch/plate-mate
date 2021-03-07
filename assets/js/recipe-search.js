Vue.component('recipesearchresults', {
	props: ['results'],
	template: `
		<section>
			<div class="" v-for="result in results">
				<div class="card">
					<div class="card-title">
						<h3>{{ result.strMeal }}</h3>
					</div>
					<div class="card-text">
						<img :src="result.strMealThumb" />
					</div>
				</div>
			</div>
		</section>
	`
})

const vm = new Vue({
	el: '#recipesearch-app',
	data: {
		results: [],
		searchrecipe: ''
	},
	methods: {
		recipesearch:function() {
			axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+this.searchrecipe)
			.then(response => {
				this.results = response.data.meals;
				console.log(response);
			})
		}
	}
});