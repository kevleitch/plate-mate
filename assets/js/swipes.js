const card = Vue.component('card', {
	props: {
		current: { type: Boolean, required: true },
		strMeal: { type: String, required: true },
		strMealThumb: { type: String, required: false },
		idMeal: {type: String, required: false},
		strCategory: {type: String, required: false},
		rating: { type: Number, required: true },
		approved: { type: Boolean },
	},
	template: `
		<div v-if="showing" class="swipe-card"
			v-bind:class="{ animated: animating, current: current }"
			v-bind:style="{ transform: returnTransformString }">
			<div class="image"
				v-bind:style="{ backgroundImage: returnImageString }">
				<!--
				<div class="image-icon"
					v-bind:class="icon.type"
					v-bind:style="{ opacity: icon.opacity }">
				</div>
				-->
			</div>
			<h3 class="name">{{ strMeal }}</h3>
		</div>
	`,
	data: () => ({
    showing: true,
    maxStars: 5,
    animating: true,
    threshold: window.innerWidth / 20, 
    maxRotation: 20,
    position: { x: 0, y: 0, rotation: 0 },
    icon: { opacity: 0, type: null }
	}),
	computed: {
		returnImageString() {
			return `url(${this.strMealThumb})`;
		},
		returnTransformString() {
      const { animating, approved, position: { x, y, rotation } } = this;
  
			if (!animating || approved !== null) {
				return `translate3D(${x}px, ${y}px, 0) rotate(${rotation}deg)`;
			}

			return null;
		},
	},
	mounted() {	
		interact(this.$el).draggable({
			inertia: false,
			onstart: () => this.animating = false,
			onmove: ({ dx, dy }) => {        
        const { position, maxRotation, threshold, icon } = this;

				const offsetX = (position.x || 0) + dx;
				const offsetY = (position.y || 0) + dy;
        
        position.x = offsetX;
				position.y = offsetY;
				
				position.rotation = maxRotation * (offsetX / threshold);
				if (position.rotation > maxRotation) {
					position.rotation = maxRotation;
				} else if (position.rotation < -maxRotation) {
					position.rotation = -maxRotation;
				}
        icon.type = 'match';
				if (position.rotation < 0) {
					icon.type = 'pass';
				}

				const opacityAmount = Math.abs(position.rotation) / maxRotation;
				icon.opacity = opacityAmount;
				this.$emit('draggedActive', icon.type, opacityAmount);
			},
			onend: () => {
        const { icon, position, threshold } = this;

				this.animating = true;

        icon.opacity = 1;
				if (position.x > threshold) {
					this.$emit('draggedThreshold', true);
				} else if (position.x < -threshold) {
					this.$emit('draggedThreshold', false);
					icon.opacity = 1;
				} else {
					position.x = 0;
					position.y = 0;
					position.rotation = 0;
					icon.opacity = 0;
				}

				this.$emit('draggedEnded');
			},
		});
	},
	watch: {
		approved() {
      const { approved, $el, position, maxRotation, icon } = this;
      
			if (approved !== null) {
				interact($el).unset();
				this.animating = true;        
        const x = window.innerWidth + (window.innerWidth / 2) + $el.offsetWidth;
		
        
        position.x = x;
				position.rotation = maxRotation;
				//icon.type = 'match';

        if (!approved) {
					position.x = -x;
					position.rotation = -maxRotation;
					//icon.type = 'pass';
				}

				icon.opacity = 1;
				setTimeout(() => this.showing = false, 200);
			}
		},
	},
});

const app = new Vue({ 
	el: '#swipes-app',
	template: `
		<div id="app">
			<h2>Choose A Random Recipe</h2>
			<h5>Swipe Right To Select A Recipe</h5>
			<div class="card-container">
				<card v-for="(card, index) in cards.data" :key="index"
					v-bind:current="index === cards.index"
					v-bind:strMeal="card.strMeal"
					v-bind:strMealThumb="card.strMealThumb"
					v-bind:idMeal="card.idMeal"
					v-bind:strCategory="card.strCategory"
					v-bind:rating="card.rating"
					v-bind:approved="card.approved"
					v-on:draggedThreshold="setApproval">
				</card>
			</div>
		</div>
	`,
	data: {
		isLoading: true,
		cards: { data: null, index: 0, max: 10 },
	},
	methods: {
		getData() {      
      const { cards } = this;
      
      cards.data = null;
      this.isLoading = true;

			fetch(`https://www.themealdb.com/api/json/v2/9973533/randomselection.php`)
			.then(async (response) => {
				const { meals } = await response.json();
				const data = meals.map(({ strMeal, strMealThumb, idMeal, strCategory }) => ({
          strMeal: strMeal,
          strMealThumb: strMealThumb,
		  idMeal: idMeal,
		  strCategory: strCategory,
          rating: Math.floor(Math.random() * 5 + 1),
          approved: null,
        }));
				
				setTimeout(() => {
					cards.data = data;
					cards.index = 0;
					this.isLoading = false;	
				}, 500);
			});
		},
		setApproval(approval) {
  const { cards, getData } = this;

  const targetCard = cards.data[cards.index];

  if (approval) {
    const { idMeal, strCategory } = targetCard;
    window.location = `recipe.php?recipeid=${idMeal}&cid=${strCategory}`;
    return;
  }

  targetCard.approved = approval;
  cards.index++;

  if (cards.index >= cards.data.length) {
    getData();
  }
}
	},
	mounted() {
		this.getData();
	},
});