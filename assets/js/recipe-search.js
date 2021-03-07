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
			/*const options = {
				method: 'GET',
				url: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search',
				params: {
				query: this.searchrecipe
			},
			headers: {
				'x-rapidapi-key': 'f2f3647ed6msh1ad30b4e2264f1bp1482ffjsne3841a421e03',
				'x-rapidapi-host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
			}
		};
		axios.request(options).then(function (response) {
			console.log(response.data);
			this.results = response.data.results
		}).catch(function (error) {
			console.error(error);
		});*/
		axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s="+this.searchrecipe)
		.then(response => {
			this.results = response.data.meals;
			console.log(response);
		})
		}
	},
});