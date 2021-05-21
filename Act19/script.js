Vue.component('lightbulb1',{
    template:`
            <section class="lightbulbs"> 
                <img v-bind:src="kidsRoom" alt="Kid's room" class="lightbulb" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            kidsRoom: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.kidsRoom=='lightbulbOff.png'){
                this.kidsRoom='lightbulbOn.png'
            }
            else{
                this.kidsRoom='lightbulbOff.png'
            }
        }
    }
})

Vue.component('lightbulb2',{
    template:`
            <section class="lightbulbs"> 
                <img v-bind:src="kidsRoom" alt="Kid's room" class="lightbulb" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            kidsRoom: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.kidsRoom=='lightbulbOff.png'){
                this.kidsRoom='lightbulbOn.png'
            }
            else{
                this.kidsRoom='lightbulbOff.png'
            }
        }
    }
})
Vue.component('lightbulb3',{
    template:`
            <section class="lightbulbs"> 
                <img v-bind:src="kidsRoom" alt="Kid's room" class="lightbulb" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            kidsRoom: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.kidsRoom=='lightbulbOff.png'){
                this.kidsRoom='lightbulbOn.png'
            }
            else{
                this.kidsRoom='lightbulbOff.png'
            }
        }
    }
})

Vue.component('lightbulb4',{
    template:`
            <section class="lightbulbs"> 
                <img v-bind:src="kidsRoom" alt="Kid's room" class="lightbulb" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            kidsRoom: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.kidsRoom=='lightbulbOff.png'){
                this.kidsRoom='lightbulbOn.png'
            }
            else{
                this.kidsRoom='lightbulbOff.png'
            }
        }
    }
})

Vue.component('lightbulb5',{
    template:`
            <section class="lightbulbs"> 
                <img v-bind:src="kidsRoom" alt="Kid's room" class="lightbulb" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            kidsRoom: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.kidsRoom=='lightbulbOff.png'){
                this.kidsRoom='lightbulbOn.png'
            }
            else{
                this.kidsRoom='lightbulbOff.png'
            }
        }
    }
})

Vue.component('lightbulb6',{
    template:`
            <section class="lightbulbs"> 
                <img v-bind:src="kidsRoom" alt="Kid's room" class="lightbulb" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            kidsRoom: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.kidsRoom=='lightbulbOff.png'){
                this.kidsRoom='lightbulbOn.png'
            }
            else{
                this.kidsRoom='lightbulbOff.png'
            }
        }
    }
})

var app = new Vue({
    el:'#app'
})