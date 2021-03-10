Vue.component('singlerecipe', {
	props: ['results'],
	template: `
		<section>
			<div class="" v-for="result in results">
				<div class="card">
					<div id="bookmark">
						<a href=""><img src="assets/img/bookmark.png" alt="Bookmark this recipe" /></a>
						<a href=""><img src="assets/img/fb-icon.png" alt="Share on Facebook" /></a>
						<a href=""><img src="assets/img/tw-icon.png" alt="Share on Twitter" /></a>
					</div>
					<div class="card-title">
						<h3>{{ result.strMeal }}</h3>
					</div>
					<div class="card-text">
						<div id="recipethumb">
							<img :src="result.strMealThumb" />
							<h5>Category: {{ result.strCategory }}</h5>
							<h5 v-if="result.strTags" id="tags">Tags: {{ result.strTags }}</h5>
						</div>
						<div id="recipedetails">
							<h4>Ingredients</h4>
							<ul>
								<li v-if="result.strIngredient1">
									{{result.strIngredient1}} - {{result.strMeasure1}}
								</li>
								<li v-if="result.strIngredient2">
									{{result.strIngredient2}} - {{result.strMeasure2}}
								</li>
								<li v-if="result.strIngredient3">
									{{result.strIngredient3}} - {{result.strMeasure3}}
								</li>
								<li v-if="result.strIngredient4">
									{{result.strIngredient4}} - {{result.strMeasure4}}
								</li>
								<li v-if="result.strIngredient5">
									{{result.strIngredient5}} - {{result.strMeasure5}}
								</li>
								<li v-if="result.strIngredient6">
									{{result.strIngredient6}} - {{result.strMeasure6}}
								</li>
								<li v-if="result.strIngredient7">
									{{result.strIngredient7}} - {{result.strMeasure7}}
								</li>
								<li v-if="result.strIngredient8">
									{{result.strIngredient8}} - {{result.strMeasure8}}
								</li>
								<li v-if="result.strIngredient9">
									{{result.strIngredient9}} - {{result.strMeasure9}}
								</li>
								<li v-if="result.strIngredient10">
									{{result.strIngredient10}} - {{result.strMeasure10}}
								</li>
								<li v-if="result.strIngredient11">
									{{result.strIngredient11}} - {{result.strMeasure11}}
								</li>
								<li v-if="result.strIngredient12">
									{{result.strIngredient12}} - {{result.strMeasure12}}
								</li>
								<li v-if="result.strIngredient13">
									{{result.strIngredient13}} - {{result.strMeasure13}}
								</li>
								<li v-if="result.strIngredient14">
									{{result.strIngredient14}} - {{result.strMeasure14}}
								</li>
								<li v-if="result.strIngredient15">
									{{result.strIngredient15}} - {{result.strMeasure15}}
								</li>
								<li v-if="result.strIngredient16">
									{{result.strIngredient16}} - {{result.strMeasure16}}
								</li>
								<li v-if="result.strIngredient17">
									{{result.strIngredient17}} - {{result.strMeasure17}}
								</li>
								<li v-if="result.strIngredient18">
									{{result.strIngredient18}} - {{result.strMeasure18}}
								</li>
								<li v-if="result.strIngredient19">
									{{result.strIngredient19}} - {{result.strMeasure19}}
								</li>
								<li v-if="result.strIngredient20">
									{{result.strIngredient20}} - {{result.strMeasure20}}
								</li>
							</ul>
							<h4>Instructions</h4>
							<p>{{ result.strInstructions }}</p>
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
			var rid = getUrlParameter('recipeid');
			axios.get("https://www.themealdb.com/api/json/v1/1/lookup.php?i="+rid)
			.then(response => {
				this.results = response.data.meals;
				console.log(response);
			})
		}
	},
	created: function(){
        this.getrecipe()
    }
});