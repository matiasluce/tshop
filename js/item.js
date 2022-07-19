var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}

id = parts[0][1];


const app = new Vue({
    el: "#app",
    data: {
        productos: [],
        identificator: id,
        errored: false,
        loading: true,
        cart: []
    },
    created() {
        var url = 'https://matiaslucero.pythonanywhere.com/productos';
        this.fetchData(url);
        this.crearLista();
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
        crearLista(){
            if(localStorage.getItem("cart") === null){
                localStorage.setItem("cart",'[]');
            }else{
                let cart = JSON.parse(localStorage.getItem("cart"));
                this.cart = cart;
            }
        },
        agregarCarrito(id){
            let cart = JSON.parse(localStorage.getItem("cart"));
            let inserted = false;
            if(cart.length > 0){
                for(i in cart){
                    if(cart[i][0] == id){
                        cart[i][1] = cart[i][1] + 1;
                        inserted = true;
                    }
                }
                if(!inserted){
                    cart.push([id,1]);
                }
            }
            else{
                cart.push([id,1]);
            }

            localStorage.setItem("cart", JSON.stringify(cart));

            this.crearLista();
        }
    }
})