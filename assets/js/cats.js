Vue.component('cats', {
	props: ['results'],
	template: `
		<section> 
			<h2>Recipes</h2>
			<div class="" v-for="result in results">
				<div class="card card-similar text-center">
					<img :src="result.strMealThumb" />
					<h5>{{ result.strMeal }}</h5>
					<a class="btn btn-outline-info" :href="'recipe.html?recipeid=' + result.idMeal" role="button">Get Recipe</a>
				</div>
			</div>
		</section>
	`
})

const rcat = new Vue({
	el: '#cats-app',
	data: {
		results: [],
	},
	methods: {
		recipecats:function() {
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
			var cid = getUrlParameter('catid');
			axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c="+cid)
			.then(response => {
				this.results = response.data.meals;
				console.log(response);
			})
		}
	},
	created: function(){
        this.recipecats()
    }
});