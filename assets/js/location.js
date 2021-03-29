Vue.component('location', {
	props: ['results'],
	template: `
		<div id="my-location">
			My Location: <strong>{{ results.city }}</strong>
		</div>
	`
})

const loc = new Vue({
	el: '#location-app',
	data: {
		results: '',
	},
	methods: {
		locationsearch:function() {
			axios.get("https://ipgeolocation.abstractapi.com/v1?api_key=b856aa1e31ca4bc0b9a32873deacb7c7")
			.then(response => {
				this.results = response.data;
				console.log(response);
			})
		}
	},
	created: function(){
        this.locationsearch()
    }
});