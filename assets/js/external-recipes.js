Vue.component('externalrecipes', {
	props: ['results', 'cid'],
	template: `
		<section>
			<h2>Similar External Recipes</h2>
			<h5>(Links open in a new tab/window)</h5>
			<div class="" v-for="result in results">
				<div class="card card-similar card-external text-center">
					<img :src="result.image_url" />
					<div id="meta" class="text-center">
						<h5>{{ result.title }}</h5>
						<a class="btn btn-outline-info" :href="result.source_url" role="button" target="_blank">Get Recipe</a>
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
const er = new Vue({
	el: '#external-app',
	data: {
		results: [],
		searchrecipe: ''
		cid: getUrlParameter('cid')
	},
	methods: {
		extrecipes:function() {
			var cid = getUrlParameter('cid');
			axios.get("https://forkify-api.herokuapp.com/api/search?q="+cid)
			.then(response => {
				this.results = response.data.recipes;
				console.log(response);
			})
		}
	},
	created: function(){
        this.extrecipes()
    }
});