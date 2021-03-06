Vue.component('recipeslike', {
	props: ['results', 'cid'],
	template: `
		<section>
			<h2>Similar Recipes</h2>
			<div class="" v-for="result in results">
				<div class="card card-similar text-center">
					<img :src="result.strMealThumb" />
					<h5>{{ result.strMeal }}</h5>
					<a class="btn btn-outline-info" :href="'recipe.php?recipeid=' + result.idMeal + '&cid=' + cid" role="button">Get Recipe</a></div>
				</div>
			</div>
		</section>
	`
})
var getUrlParameter = function getUrlParameter(sParam) {
				var sPageURL = window.location.search.substring(1),
				sURLVariables = sPageURL.split('&'),
				sParameterName,
				i;

				for (i = 0; i < sURLVariables.length; i++) {
					sParameterName = sURLVariables[i].split('=');

					if (sParameterName[0] === sParam) {
						return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
					}
				}		
			};
const rl = new Vue({
	el: '#recipeslike-app',
	data: {
		results: [],
		searchrecipe: '',
		cid: getUrlParameter('cid')
	},
	methods: {
		recipeslike:function() {
			var cid = getUrlParameter('cid');
			axios.get("https://www.themealdb.com/api/json/v2/9973533/filter.php?c="+cid)
			.then(response => {
				this.results = response.data.meals;
				console.log(response);
			})
		}
	},
	created: function(){
        this.recipeslike()
    }
});