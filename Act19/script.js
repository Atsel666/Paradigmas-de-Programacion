Vue.component('lightbulb1',{
    template:`
            <section class="lightbulb1"> 
                <img v-bind:src="kidsRoom" alt="Kid's room" class="lightbulb1" id="1" @click="switchOnOff()">
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
            <section class="lightbulb2"> 
                <img v-bind:src="stance" alt="Stance" class="lightbulb2" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            stance: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.stance=='lightbulbOff.png'){
                this.stance='lightbulbOn.png'
            }
            else{
                this.stance='lightbulbOff.png'
            }
        }
    }
})
Vue.component('lightbulb3',{
    template:`
            <section class="lightbulb3"> 
                <img v-bind:src="mainRoom" alt="Main Room" class="lightbulb3" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            mainRoom: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.mainRoom=='lightbulbOff.png'){
                this.mainRoom='lightbulbOn.png'
            }
            else{
                this.mainRoom='lightbulbOff.png'
            }
        }
    }
})

Vue.component('lightbulb4',{
    template:`
            <section class="lightbulb4"> 
                <img v-bind:src="TVRoom" alt="TV Room" class="lightbulb4" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            TVRoom: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.TVRoom=='lightbulbOff.png'){
                this.TVRoom='lightbulbOn.png'
            }
            else{
                this.TVRoom='lightbulbOff.png'
            }
        }
    }
})

Vue.component('lightbulb5',{
    template:`
            <section class="lightbulb5"> 
                <img v-bind:src="dinningRoom" alt="Dinning Room" class="lightbulb5" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            dinningRoom: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.dinningRoom=='lightbulbOff.png'){
                this.dinningRoom='lightbulbOn.png'
            }
            else{
                this.dinningRoom='lightbulbOff.png'
            }
        }
    }
})

Vue.component('lightbulb6',{
    template:`
            <section class="lightbulb6"> 
                <img v-bind:src="kitchen" alt="Kitchen" class="lightbulb6" id="1" @click="switchOnOff()">
            </section>
    `,
    data(){
        return{
            kitchen: 'lightbulbOff.png',
        }
    },
    methods:{
        switchOnOff(){        

            if(this.kitchen=='lightbulbOff.png'){
                this.kitchen='lightbulbOn.png'
            }
            else{
                this.kitchen='lightbulbOff.png'
            }
        }
    }
})

var app = new Vue({
    el:'#app'
})