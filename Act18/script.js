const app = Vue.createApp({
    data(){
        return{
            users:[]
        }
    },
    created(){
        this.getUsers()
    },
    methods: {
        getUsers(){

            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => {
                    this.users = users
                })
        }
    },
})

const vm = app.mount('#app')