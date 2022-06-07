import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import  {createRouter, createWebHistory} from 'vue-router'
import addEmployeeApp from "./components/addEmployee.vue"
import detailsApp from "./components/employeeDetails.vue"
import employeeListApp from "./components/employeesList.vue"

const routes = [
    {
        path:'/emps',
        component:employeeListApp,
        children:[
            {
                path:'/emps/:id',
                component:detailsApp,
                props:true
            }
        ]
    },
    {
        path:'/addemployee',
        component:addEmployeeApp
    },
]

const router = createRouter({
    history:createWebHistory(),
    routes,
})

createApp(App).use(router).mount('#app')
