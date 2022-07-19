let searchBtn = document.querySelector('.btn-search');
let searchBox = document.querySelector('.search-box');
let searchTop = document.querySelector('.search-top');

let cartContainer = document.getElementById("cart");
let closeCart = document.querySelector('.fa-xmark');
let openCart = document.querySelector('.fa-cart-shopping');

const app = new Vue({
    el: "#app",
    data: {
        productos: [],
        errored: false,
        loading: true,
        filter: "",
        ss: "",
        cart: [],
        total: 0
    },
    created() {
        var url = 'https://matiaslucero.pythonanywhere.com/productos';
        this.fetchData(url);
        this.crearLista();
        this.calcularTotal();
    },
    methods: {
        fetchData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.productos = data;
                    this.loading = false;
                })
                .catch(err => {
                    this.errored = true
                })
        },
        filterCategory(category){
            this.filter = category;
            console.log(category);
        },
        crearLista(){
            if(localStorage.getItem("cart") === null){
                localStorage.setItem("cart",'[]');
            }else{
                let cart = JSON.parse(localStorage.getItem("cart"));
                this.cart = cart;
            }
        },
        calcularTotal(){
            for(producto of productos){
                for(item of cart){
                    if(item[0] == producto.id){
                        this.total += producto.precio * item[1];
                    }
                }
            }
        },
        cleanCart(){
            localStorage.setItem("cart",'[]');
            this.crearLista();
        },
        
    }
})

closeCart.addEventListener("click", () =>{
    alert("chi");
    cartContainer.style.display= "none";
})

openCart.addEventListener('click', () =>{
    cartContainer.style.display= "block";
});



