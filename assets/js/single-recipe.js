Vue.component('singlerecipe', {
	props: ['results', 'wresults', 'checkeditems', 'cid'],
	template: `
		<section>
			<div class="" v-for="result in results">
				<div class="card">
					<div class="card-title">
						<h3>{{ result.strMeal }}</h3>
					</div>
					<div class="card-text">
						<div id="recipethumb">
							<img :src="result.strMealThumb" />
							<h5>Category: {{ result.strCategory }}</h5>
							<h5 v-if="result.strTags" id="tags">Tags: {{ result.strTags }}</h5>
							<div id="winepairing">
								<hr />
								<div class="" v-for="wresult in wresults">
									<h4>Wine Pairing</h4>
									<h5>{{ wresult.title }}</h5>
									<img :src="wresult.imageUrl" />
									<p><small>{{ wresult.description }}</small></p>
									<a target="_blank" class="btn btn-secondary btn-sm" :href="'https://www.wine-searcher.com/find/' + wresult.title + '/1/uk'" role="button">Buy Wine</a>
									
								</div>
							</div>
						</div>
						<div id="recipedetails">
							<h4>Ingredients</h4>
							<h5>Check the boxes to add selected ingredients to a shopping list</h5>
							<div id="printshoppinglist">
								<h2>Shopping List</h2>								
								<ul>
								  <li v-for="item of checkeditems">
									{{ item }}
								  </li>
								</ul>
							</div>
							<ul>
								<li v-if="result.strIngredient1">
									<label :for="result.strIngredient1">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient1" :id="result.strIngredient1" v-model="checkeditems"> {{result.strIngredient1}} - {{result.strMeasure1}}
									</label>
								</li>
								<li v-if="result.strIngredient2">
									<label :for="result.strIngredient2">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient2" :id="result.strIngredient2" v-model="checkeditems">
										{{result.strIngredient2}} - {{result.strMeasure2}}
									</label>
								</li>
								<li v-if="result.strIngredient3">
									<label :for="result.strIngredient3">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient3" :id="result.strIngredient3" v-model="checkeditems">
										{{result.strIngredient3}} - {{result.strMeasure3}}
									</label>
								</li>
								<li v-if="result.strIngredient4">
									<label :for="result.strIngredient4">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient4" :id="result.strIngredient4" v-model="checkeditems">
										{{result.strIngredient4}} - {{result.strMeasure4}}
									</label>
								</li>
								<li v-if="result.strIngredient5">
									<label :for="result.strIngredient5">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient5" :id="result.strIngredient5" v-model="checkeditems">
										{{result.strIngredient5}} - {{result.strMeasure5}}
									</label>
								</li>
								<li v-if="result.strIngredient6">
									<label :for="result.strIngredient6">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient6" :id="result.strIngredient6" v-model="checkeditems">
										{{result.strIngredient6}} - {{result.strMeasure6}}
									</label>
								</li>
								<li v-if="result.strIngredient7">
									<label :for="result.strIngredient7">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient7" :id="result.strIngredient7" v-model="checkeditems">
										{{result.strIngredient7}} - {{result.strMeasure7}}
									</label>
								</li>
								<li v-if="result.strIngredient8">
									<label :for="result.strIngredient8">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient8" :id="result.strIngredient8" v-model="checkeditems">
										{{result.strIngredient8}} - {{result.strMeasure8}}
									</label>
								</li>
								<li v-if="result.strIngredient9">
									<label :for="result.strIngredient9">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient9" :id="result.strIngredient9" v-model="checkeditems">
										{{result.strIngredient9}} - {{result.strMeasure9}}
									</label>
								</li>
								<li v-if="result.strIngredient10">
									<label :for="result.strIngredient10">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient10" :id="result.strIngredient10" v-model="checkeditems">
										{{result.strIngredient10}} - {{result.strMeasure10}}
									</label>
								</li>
								<li v-if="result.strIngredient11">
									<label :for="result.strIngredient11">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient11" :id="result.strIngredient11" v-model="checkeditems">
										{{result.strIngredient11}} - {{result.strMeasure11}}
									</label>
								</li>
								<li v-if="result.strIngredient12">
									<label :for="result.strIngredient12">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient12" :id="result.strIngredient12" v-model="checkeditems">
										{{result.strIngredient12}} - {{result.strMeasure12}}
									</label>
								</li>
								<li v-if="result.strIngredient13">
									<label :for="result.strIngredient13">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient13" :id="result.strIngredient13" v-model="checkeditems">
										{{result.strIngredient13}} - {{result.strMeasure13}}
									</label>
								</li>
								<li v-if="result.strIngredient14">
								<label :for="result.strIngredient14">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient14" :id="result.strIngredient14" v-model="checkeditems">
									{{result.strIngredient14}} - {{result.strMeasure14}}
								</label>
								</li>
								<li v-if="result.strIngredient15">
									<label :for="result.strIngredient15">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient15" :id="result.strIngredient15" v-model="checkeditems">
										{{result.strIngredient15}} - {{result.strMeasure15}}
									</label>
								</li>
								<li v-if="result.strIngredient16">
									<label :for="result.strIngredient16">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient16" :id="result.strIngredient16" v-model="checkeditems">
										{{result.strIngredient16}} - {{result.strMeasure16}}
									</label>
								</li>
								<li v-if="result.strIngredient17">
									<label :for="result.strIngredient17">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient17" :id="result.strIngredient17" v-model="checkeditems">
										{{result.strIngredient17}} - {{result.strMeasure17}}
									</label>
								</li>
								<li v-if="result.strIngredient18">
									<label :for="result.strIngredient18">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient18" :id="result.strIngredient18" v-model="checkeditems">
										{{result.strIngredient18}} - {{result.strMeasure18}}
									</label>
								</li>
								<li v-if="result.strIngredient19">
									<label :for="result.strIngredient19">
										<input class="form-check-input" type="checkbox" :value="result.strIngredient19" :id="result.strIngredient19" v-model="checkeditems">
										{{result.strIngredient19}} - {{result.strMeasure19}}
									</label>
								</li>
								<li v-if="result.strIngredient20">
								<label :for="result.strIngredient20">
									<input class="form-check-input" type="checkbox" :value="result.strIngredient20" :id="result.strIngredient20" v-model="checkeditems">
									{{result.strIngredient20}} - {{result.strMeasure20}}
								</label>
								</li>
							</ul>
							<button type="button" class="btn btn-secondary btn-sm sl" onclick="printJS('printshoppinglist', 'html')">
								Print Shopping List
							</button>
							<div id="printinstructions">
								<h4>Instructions</h4>
								<p>{{ result.strInstructions }}</p>
							</div>
							<button type="button" class="btn btn-secondary btn-sm" onclick="printJS('printinstructions', 'html')">
								Print Instructions
							</button>
							<br />
							<h5>Ask Your Mates To Join You On WhatApp or by Email</h5>
							<a onclick="return JSShare.go(this)" data-type="whatsapp"><img class="icons" src="assets/img/whatsapp-icon.png" alt="WhatsApp button" /></a>
							<a onclick="return JSShare.go(this)" data-type="email"><img class="icons" src="assets/img/email-icon.png" alt="Email button" /></a>
						</div>
					</div>
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
const sr = new Vue({
	el: '#singlerecipe-app',
	data: {
		results: [],
		wresults: [],
		recipeid: '',
		checkeditems: [],
		cid: getUrlParameter('cid'),
		selected: []
	},
	methods: {
		getrecipe:function() {
			var rid = getUrlParameter('recipeid');
			axios.get("https://www.themealdb.com/api/json/v2/9973533/lookup.php?i="+rid)
			.then(response => {
				this.results = response.data.meals;
				console.log(response);
			})
		},
		getwine:function() {
			var wid = getUrlParameter('cid');
			axios.get("https://api.spoonacular.com/food/wine/pairing?food=" + wid + "&apiKey=0f68abb4dee648439aa9f6622e499495")
			.then(response => {
				this.wresults = response.data.productMatches;
				console.log(response);
			})
		}
	},
	created: function(){
        this.getrecipe(),
		this.getwine()
    }
});