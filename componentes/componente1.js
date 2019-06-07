Vue.component('componente1',{   //Se crea el componente
	template: 
	`
	  <div style='background: red;padding:2px;'>
		  <h2>Componente 1: {{ numeroComponente1 }} </h2>
		  <button @click="numeroComponente1++">+</button>
		  <componente2 :numero="numeroComponente1" @nombreComp2="nombreComp1= $event"></componente2>
		  {{ nombreComp1 }}
	  </div>
	`,
	data(){
		return{
			numeroComponente1: 0,
			nombreComp1: ''
		}
	}
})

//: significa bind que esto es enlazar una cosa con otra