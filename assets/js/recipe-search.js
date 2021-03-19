Vue.component('recipesearchresults', {
	props: ['results'],
	template: `
		<section>
			<div class="" v-for="result in results">
				<div class="card">
					<div class="card-text">
						<div id="recipethumb">
							<img :src="result.strMealThumb" />
						</div>
						<div id="recipedetails">
							<h4>{{ result.strMeal }}</h4>
							<h5>Category: {{ result.strCategory }}</h5>
							<h5 v-if="result.strTags" id="tags">Tags: {{ result.strTags }}</h5>
							<h5 v-if="result.strArea" id="area">Area recipe is from: {{ result.strArea }}</h5>
							<a class="btn btn-outline-info" :href="'recipe.html?recipeid=' + result.idMeal + '&cid=' + result.strCategory" role="button">Get Recipe</a>
						</div>
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
			axios.get("https://www.themealdb.com/api/json/v2/9973533/search.php?s="+this.searchrecipe)
			.then(response => {
				this.results = response.data.meals;
				console.log(response);
			})
		}
	}
});