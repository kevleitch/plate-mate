Vue.component('location', {
	props: ['results'],
	template: `
		<div id="my-location">
			My Location: <strong id="cityname">{{ results.city }}</strong>
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
				var cn = response.data.city;
				var xhttp = new XMLHttpRequest();
				xhttp.onreadystatechange = function() {
					if (this.readyState == 4 && this.status == 200) {
					  console.log(xhttp.responseText);
					}
				};
				xhttp.open("GET", "./assets/inc/location.php?loc="+cn, true);
				xhttp.send();
			})
		}
	},
	created: function(){
        this.locationsearch()
    }
});