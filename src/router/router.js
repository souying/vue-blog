import Home from '../components/Home.vue'
import List from '../components/List.vue'
import Topic from '../components/Topic.vue'
export default[
	{path:'/',component:Home},
	{path:'/list/:id/:page',component:List},
	{path:'/topic/:id',component:Topic}
]