//Codigo tambien hecho por Axel Rivas Guillen - 329830
const app = Vue.createApp({
    data(){
        return{
            productos: [
                {nombre: "cerveza", cantidad: 100},
                {nombre: "agua", cantidad: 100},
            ],
            producto: ""
        }
    },
    methods: {
            agregarProducto(){
                this.productos.push(
                    {nombre: this.producto, cantidad: 0}
                )
                this.producto = ""
        }
    },
    computed: { 
        total(){
            return this.productos.reduce((contador, product) => contador + product.cantidad, 0)
        }
    }
})

const vm = app.mount('#app')